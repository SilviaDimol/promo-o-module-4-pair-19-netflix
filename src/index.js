const express = require("express");
const cors = require("cors");
const movies = require("../web/src/data/movies.json");
const users = require("../web/src/data/users.json");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Get, obtener datos de la explicación
server.get("/movies", (req, res) => {
  console.log("Petición a la ruta GET /movies");
  const response = {
    success: true,
    movies: movies,
  };
  res.json(response);
});

// A revisar!
// server.post("/users", (req, res) => {
//   console.log("req.body");
//   const reponseUsers = users.find(users => users.id === requestParamsId);
//   };
//   res.json(response);
// });

// Get, obtener datos de la explicación
server.get("/movie/:movieId", (req, res) => {
  const foundMovie = movies.find(movie => movie.id === req.params.movieId);
  res.render('movie', foundMovie);
});



//escribimos la ruta con ./src porque node busca la carpeta de estáticos desde la raiz del proyecto
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerImagesPath = "./src/public-movies-images";
server.use(express.static(staticServerImagesPath));

const staticServerStylesPath = "./src/styles";
server.use(express.static(staticServerStylesPath));
