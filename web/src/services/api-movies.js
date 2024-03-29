// login
const getMoviesFromApi = () => {
  console.log("Se están pidiendo las películas de la app");
  return fetch(`http://localhost:4000/movies`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
