const baseLocation = "https//localhost:8080/files/";

const packs = [
    {
        index: 0,
        name: "Movies",
        link: baseLocation + "Movies",
        file: false
    },
    {
        index: 1,
        name: "Images",
        link: baseLocation + "Images",
        file: false
    },
    {
        index: 2,
        name: "student.txt",
        link: baseLocation + "students.txt",
        file: true
    },
    {
        index: 3,
        name: "profile.png",
        link: baseLocation + "profile.png",
        file: true
    },
    {
        index: 4,
        name: "movie.txt",
        link: baseLocation + "movie.txt",
        file: true
    },
    {
        index: 5,
        name: "cars.txt",
        link: baseLocation + "cars.txt",
        file: true
    },
    {
        index: 6,
        name: "script.mp4",
        link: baseLocation + "script.mp4",
        file: true
    },
    {
        index: 7,
        name: "audio.mp3",
        link: baseLocation + "audio.mp3",
        file: true
    }
];

export default packs;
