class Raffle<T>{

    private ticket?: T; //can be ticket, string

    //can't modify ticket
    constructor(private name: string){};

    //encapsulation

    //get value of ticket
    getTicket(){
        return this.ticket;
    }

    //put a value on the ticket in a new instance
    setTicket(ticket:T){
        this.ticket = ticket;
    }

    public sortOut(): string {
        return "The ticket " + this.ticket + " is for " + this.name;
    }
};

let raffle = new Raffle<number>("Mateo"); //the generic is a number
raffle.setTicket(12);
console.log(raffle.sortOut()); 

//with string
let raffle2 = new Raffle<string>("Lucas");
raffle2.setTicket("4");
console.log(raffle2.sortOut());