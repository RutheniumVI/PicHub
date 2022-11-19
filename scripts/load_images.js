images = [
    {
        src: "../files/ocean.jpg",
        dateTaken: new Date("2022-01-22"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["water", "mountains"]
    },
    {
        src: "../files/mountains.jpg",
        dateTaken: new Date("2022-01-21"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["mountains"]
    },
    {
        src: "../files/tree.jpg",
        dateTaken: new Date("2022-01-22"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["tree"]
    },
    {
        src: "../files/dog.jpg",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["dog"]
    },
    {
        src: "../files/tree.jpg",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["tree"]
    },
    {
        src: "../files/dog.jpg",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["dog"]
    },
    {
        src: "../files/tree.jpg",
        dateTaken: new Date("2022-01-25"),
        dateUploaded: new Date("2022-01-26"),
        tags: ["tree"]
    },
    {
        src: "../files/ocean.jpg",
        dateTaken: new Date("2022-02-25"),
        dateUploaded: new Date("2022-02-26"),
        tags: ["water", "mountains"]
    },
    {
        src: "../files/mountains.jpg",
        dateTaken: new Date("2022-02-25"),
        dateUploaded: new Date("2022-02-26"),
        tags: ["mountains"]
    },
    {
        src: "../files/tree.jpg",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["tree"]
    },
    {
        src: "../files/dog.jpg",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["dog"]
    },
    {
        src: "../files/tree.jpg",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["tree"]
    },
    {
        src: "../files/dog.jpg",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["dog"]
    },
    {
        src: "../files/tree.jpg",
        dateTaken: new Date("2022-02-26"),
        dateUploaded: new Date("2022-02-27"),
        tags: ["tree"]
    },
]

if(!localStorage.images){
    localStorage.images = JSON.stringify(images)
}