// import axios from "axios";

const API_KEY = "a80bb377f6b7e60d939d42f267fc679a";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";


// async function getPopularMovies(url) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
//     );
//     const data = await response.data;
//     return response.data;
//   } catch (error) {
//     console.error('Smth wrong with api get full trends' + error);
//   }
// }

// Популярні фільми
// fetch(`${BASE_URL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//     .catch(err => console.error(err));
  

// // Рейтингові фільми
// fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//     .catch(err => console.error(err));
  
// // Що очікуються
// fetch(`${BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//     .catch(err => console.error(err));
  
// // Пошук за назвою
// fetch(`${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//     .catch(err => console.error(err));