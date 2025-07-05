//interface
interface Developer {
    name: string,
    technologies: string[],
    drinksMate?: boolean | null
};

//object
let dev: Developer = {
    name: "Mateo",
    technologies: ["Javascript", "HTML", "CSS", "Spring Boot", "Java"],
    drinksMate: true
};

let dev2 = {
    neim: "Franco",
    tecnos: ["Javascript", "Node.js", "Express.js", "React", "MongoDB", "HTML", "CSS"],
    sended: false
};

// dev = {
//     name: "Mateo",
//     technologies: ["Javascript", "HTML", "CSS", "Spring Boot", "Java", "Spring Security", "Vue", "Laravel"],
//     drinksMate: true
// }

function sendCV(developer: Developer){
    console.log("This CV belongs to " + developer.name);
}

// incorrect --> sendCV(dev2);
sendCV(dev);