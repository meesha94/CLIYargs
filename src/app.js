const yargs = require("yargs")

const { Movie, movieArr } = require("./utils");
const { Makeup, makeupArr } = require("./utils/makeupindex")


const app = (args) => {
    if (args.add) {
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

//app(yargs.argv);

const app1 = (args) => {
    if (args.add) {
        const makeup = new Makeup(args.brand, args.product);
        makeup.add();
        console.log(makeupArr);
    } else if (args.addMany) {
        const makeup1 = new Makeup(args.brand, args.product);
        const makeup2 = new Makeup(args.brand, args.product);
        makeup1.add();
        makeup2.add();
        console.log(makeupArr);
    } else {
        console.log("incorrect command")
    }
};

app1(yargs.argv)