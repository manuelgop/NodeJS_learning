var movies = require('./movies');
movies.printAvatar();
movies.printMarte();
console.log(movies.favmovie);

fs.writeFileSync("con.txt", "hola");
