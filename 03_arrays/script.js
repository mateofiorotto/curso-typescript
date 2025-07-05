"use strict";
//Numbers example
let numberArray = [1, 2, 3, 4];
let sum = 0;
numberArray.forEach(element => {
    sum += element;
});
console.log("Sum = " + sum);
//Strings example
let webFrameworks = ["Spring Boot", "ASP.NET", "Laravel", "DJango", "Express.js"];
console.log(webFrameworks[0].indexOf('Spring Boot') == 0 ? "It's Spring Boot" : "It's another web framework");
