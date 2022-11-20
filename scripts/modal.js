// Get the modal
var modal = document.getElementById("uploadModal");

var previewImage = document.getElementById("previewImg")
var imageName = document.getElementById("name")
var imageDate = document.getElementById("date")
var imageTags = document.getElementById("newTags")
var addTagBtn = document.getElementById("addTagBtn")
var tagInput = document.getElementById("tagInput")
var newTagArea = document.getElementById("newTags")

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
        tags: getNewTagsList()
    }
    images.push(img)
    localStorage.images = JSON.stringify(images)
    clearModal()
    modal.style.display = "none";
}

function getNewTagsList() {
  var newTagsList = []
  var tags = document.getElementsByClassName("newTag")
  for(var i=0;i<tags.length;i++){
    newTagsList.push(tags[i].innerHTML)
  }
  return newTagsList;
}

function addNewTagButton(tag){
  if(tag === "") return

  var column = document.createElement("div")
  column.classList.add("col", "newTagCol")

  var button = document.createElement("button")
  button.innerHTML = tag
  button.classList.add("newTag")
  button.onclick = function() {
    if(suggestedTags.indexOf(tag) >= 0) {
      addSuggestedTag(tag)
    }
    this.parentElement.remove();
  };

  column.appendChild(button)
  newTagArea.appendChild(column)
}

function suggestedButtonOnclick() {
  suggestedTags.push(this.innerText)
  addNewTagButton(this.innerText)
  this.parentElement.remove();
}

function addSuggestedTag(tag){

  var suggestedTagsArea = document.getElementById("suggestedTags")
  var column = document.createElement("div")
  column.classList.add("col", "suggestedTags")

  var button = document.createElement("button")
  button.innerHTML = tag
  button.onclick = suggestedButtonOnclick
  button.classList.add("suggestedTagButton")

  column.appendChild(button)
  suggestedTagsArea.appendChild(column)
}

addTagBtn.onclick = function () {
  addNewTagButton(tagInput.value);
  //clear input
  tagInput.value=""
}


//Suggested tags
var tags = document.getElementsByClassName("suggestedTagButton")
var suggestedTags = []

for(var i=0;i<tags.length;i++){
  tags[i].onclick = suggestedButtonOnclick;
}