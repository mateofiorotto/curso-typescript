"use strict";
class Raffle {
    //can't modify ticket
    constructor(name) {
        this.name = name;
    }
    ;
    //encapsulation
    //get value of ticket
    getTicket() {
        return this.ticket;
    }
    //put a value on the ticket in a new instance
    setTicket(ticket) {
        this.ticket = ticket;
    }
    sortOut() {
        return "The ticket " + this.ticket + " is for " + this.name;
    }
}
;
let raffle = new Raffle("Mateo"); //the generic is a number
raffle.setTicket(12);
console.log(raffle.sortOut());
//with string
let raffle2 = new Raffle("Lucas");
raffle2.setTicket("4");
console.log(raffle2.sortOut());
