images = [
    {
        src: "../files/ocean.jpg",
        name: "ocean",
        dateTaken: new Date("2022-01-22"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["water", "mountains"],
        albums: ["favs", "nature"]
    },
    {
        src: "../files/mountains.jpg",
        name: "mountains",
        dateTaken: new Date("2022-01-21"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["mountains"],
        albums: ["favs", "nature"]
    },
    {
        src: "../files/tree.jpg",
        name: "mountains",
        dateTaken: new Date("2022-01-22"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["tree"],
        albums: ["nature"]
    },
    {
        src: "../files/dog.jpg",
        name: "dog",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["dog"],
        albums: ["favs", "dogs"]
    },
    {
        src: "../files/tree_2.jpeg",
        name: "tree_2",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["tree"],
        albums: ["nature"]
    },
    {
        src: "../files/dog_2.jpg",
        name: "dog_2",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["dog"],
        albums: ["favs", "dogs"]
    },
    {
        src: "../files/tree_3.jpeg",
        name: "tree_3",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["tree"],
        albums: ["nature", "favs"]
    },
    {
        src: "../files/ocean_2.jpg",
        name: "ocean_2",
        dateTaken: new Date("2022-02-25"),
        dateUploaded: new Date("2022-02-26"),
        tags: ["water"],
        albums: ["nature"]
    },
    {
        src: "../files/mountains_2.jpeg",
        name: "mountains_2",
        dateTaken: new Date("2022-02-25"),
        dateUploaded: new Date("2022-02-26"),
        tags: ["mountains"],
        albums: ["nature"]
    },
    {
        src: "../files/tree_4.jpeg",
        name: "tree_4",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["tree"],
        albums: ["nature"]
    },
    {
        src: "../files/dog_3.jpg",
        name: "dog_3",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["dog"],
        albums: ["dogs"]
    },
    {
        src: "../files/tree_5.jpeg",
        name: "tree_5",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["tree"],
        albums: ["nature", "favs"]
    },
    {
        src: "../files/tree_6.jpeg",
        name: "tree_6",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["tree"],
        albums: ["nature"]
    },
]

if(!localStorage.images){
    localStorage.images = JSON.stringify(images)
}