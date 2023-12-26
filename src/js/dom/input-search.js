import { refs } from "../common/refs";
import { fetchMovieSearcher } from "../api/fetch";


// refs.form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//     e.preventDefault();
//     const value = e.currentTarget.searchQuery.value;
//     // if (!value) {
//     //     refs.inputSearch.value = "";
//     //     refs.inputSearch.textContent = "ERROR";
//     // }
//     // const response = onSearchMovies(value);
//     // const movieArr = response.results;

// }


const API_KEY = "a80bb377f6b7e60d939d42f267fc679a";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// let searchQuery = "";

// refs.form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     searchQuery= e.currentTarget.searchQuery.value;
    
//     //    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`).then(res => res.json()).then(console.log())
//     const searchUrl = `${SEARCH}${searchQuery}`
//     showMovies(SEARCH);
// })