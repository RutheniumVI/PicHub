// Get the modal
var modal = document.getElementById("uploadModal");

var previewImage = document.getElementById("previewImg")
var imageName = document.getElementById("name")
var imageDate = document.getElementById("date")
var imageTags = document.getElementById("tags")


var fileInput = document.getElementById("file-input")
var confirmBtn = document.getElementById("confirmButton")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  clearModal()
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

previewImage.onclick = function() {
    fileInput.click()
}

//Uploads the image shown to the one picked by the user
fileInput.onchange = function() {
    let file = fileInput.files[0];
    if(!file) return;
    console.log(file);
    imageName.value = file.name.replace(/\.[^/.]+$/, "")
    previewImage.src = URL.createObjectURL(file);
}

function clearModal() {
  previewImage.removeAttribute("crossOrigin")
  previewImage.src = "../files/upload_placeholder.jpg"
  imageName.value = ""
  imageTags.value = ""
}

//gets the image data url used to save the image
function getImageDataURL() {
  previewImage = document.getElementById("previewImg")
  var canvas = document.createElement("canvas")
  canvas.width = previewImage.width;
  canvas.height = previewImage.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(previewImage, 0, 0, previewImage.width, previewImage.height);
  previewImage.setAttribute('crossOrigin', 'Anonymous')

  return canvas.toDataURL("image/png")
}

//When user presses upload in the modal
confirmBtn.onclick = function () {
    var dataURL = getImageDataURL()

    images = JSON.parse(localStorage.getItem("images"))
    let img =  {
        src: dataURL,
        dateTaken: imageName.value,
        dateUploaded:  new Date(imageDate.value),
        tags: imageTags.value.toLowerCase().split(", ")
    }
    images.push(img)
    localStorage.images = JSON.stringify(images)
    clearModal()
    modal.style.display = "none";
}


//Suggested tags
var tags = document.getElementsByClassName("tagButton")

for(var i=0;i<tags.length;i++){
  tags[i].onclick = function() {
    imageTags.value += this.innerText + ", "
  }
}