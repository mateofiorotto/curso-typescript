"use strict";
/**
 * BOOLEANS
 */
console.log("BOOLEANS");
console.log("---------");
let studying = true;
if (studying) {
    console.log("I'm studying");
}
else {
    console.log("I'm not studying");
}
/**
 * NUMBERS
 */
console.log("");
console.log("NUMBERS");
console.log("---------");
//Example 1
let goalsPsg = 4;
let goalsInterMiami = 0;
function playMatch(team1, team2) {
    if (team1 > team2) {
        console.log("PSG Wins");
    }
    else if (team2 > team1) {
        console.log("Inter Miami Wins");
    }
    else {
        console.log("Tied Match");
    }
}
;
playMatch(goalsPsg, goalsInterMiami);
//Ex 2
let argentinaGoals = 0;
let brazilGoals = 1;
let messiPlays = true;
function playClassicMatch(argentinaGoals, brazilGoals, messiPlays) {
    let reason = "";
    if (messiPlays) {
        argentinaGoals += 2;
        reason = " - Messi Scored " + argentinaGoals + " goals";
    }
    if (brazilGoals > argentinaGoals) {
        console.log("Brazil Wins");
    }
    else if (argentinaGoals > brazilGoals) {
        console.log("Argentina Wins" + reason);
    }
    else {
        console.log("Tied Match");
    }
}
;
playClassicMatch(argentinaGoals, brazilGoals, messiPlays);
//Can be a string, null or undefined
let connection = "https://google.com";
