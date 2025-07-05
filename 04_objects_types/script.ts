//type
type Developer = {
    name: string,
    technologies: string[],
    drinksMate?: boolean | null //optional
};

//object
let dev: Developer = {
    name: "Mateo",
    technologies: ["Javascript", "HTML", "CSS", "Spring Boot", "Java"],
    drinksMate: true
};

let dev2: Developer = {
    name: "Franco",
    technologies: ["Javascript", "Node.js", "Express.js", "React", "MongoDB", "HTML", "CSS"],
    drinksMate: null
};

// dev = {
//     name: "Mateo",
//     technologies: ["Javascript", "HTML", "CSS", "Spring Boot", "Java", "Spring Security", "Vue", "Laravel"],
//     drinksMate: true
// }

console.log(dev);