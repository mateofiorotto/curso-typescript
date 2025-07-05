class Movie{
    //name: string = "Madagascar"; //default value "Madagascar"
    name?: string;
    protagonists?: string[];
    actors?: string[];

    showMovie(){
        console.log("Showing movie: " + this.name);
    }

    constructor(name: string, protagonists: string[], actors: string[]){
        this.name = name;
        this.protagonists = protagonists;
        this.actors = actors;
    }
};

const movie = new Movie("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Ryan Gosling"]);
const movie2 = new Movie("El Camino", ["Jesse Pinkman"], ["Aaron Paul"]);

movie.showMovie();
console.log(movie);
console.log(movie2);

