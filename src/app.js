const yargs = require("yargs")

const { Movie, movieArr } = require("./utils");



const app = (args) => {
    if(args.add) {
        const movie = new Movie(args.movie, args.actor);
        movie.add()
        console.log(movieArr);
    } else if (args.addMany) {
        const movie1 = new Movie(args.movie, args.actor);
        const movie2 = new Movie(args.movie, args.actor);
        movie1.add()
        movie2.add()
        console.log(movieArr)
    } else {
        console.log("incorrect command");
    }
};

app(yargs.argv);