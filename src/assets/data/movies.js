const baseLocation = "https//localhost:8080/files/";

const movies = [
    {
        index: 0,
        name: "Avenger",
        link: baseLocation + "Avengers",
        file: true
    },
    {
        index: 1,
        name: "Spider Man",
        link: baseLocation + "Images",
        file: true
    },
    {
        index: 2,
        name: "Luca",
        link: baseLocation + "students.txt",
        file: true
    },
    {
        index: 3,
        name: "Another",
        link: baseLocation + "profile.png",
        file: false
    }
];

export default movies;
