import "./main.css";


const API_KEY = "11d6fe83-6e82-4b2e-b702-0a2f013b31cc";
const API_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const form = document.querySelector(".form");
const formBtn = document.querySelector(".btn");
const movies = document.querySelector(".movies")

form.addEventListener('submit', onSearch);

getMovies(API_URL)
async function getMovies(url) {
    const response = await fetch(url, {
        headers: { 
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        }
    })
    const restpData = await response.json()
}

function showMovies(data) {

    const moviesEl = document.querySelector(".movies");

    document.querySelector(".movies").innerHTML = "";

    data.films.forEach((films) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = ` <div class="movie__cover-inner">
             <img
               src="${films.posterUrlPreview}"
               class="movie__cover"
               alt="${films.nameRu}"
             />
             <div class="movie__cover--darkenet"></div>
          </div>
           <ul class="movie__info">
             <li class="movie__title">"${films.nameRu}"</li>
             <li class="movie__category">${films.genres.map(genre => `${genre.genre}`)}</li></ul>
             <div class="movie__rating movie__rating--color"></div>
           </div`;
        moviesEl.appendChild(movieEl)
        
        
    });

}


// function mov({ films }) {
//     const aaa = films.map(({ nameRu, genres, nameRu, posterUrlPreview }) => ` <div class="movie__cover-inner">
//              <img
//                src="${posterUrlPreview}"
//                class="movie__cover"
//                alt="${nameRu}"
//              />
//              <div class="movie__cover--darkenet"></div>
//           </div>
//            <ul class="movie__info">
//              <li class="movie__title">"${nameRu}"</li>
//              <li class="movie__category">${genres.map(genre => `${genre.genre}`)}</li></ul>
//              <div class="movie__rating movie__rating--color"></div>
//            </div`
//     )
//     return aaa.join('')
// }


// function appendImagesMarkup(data) {
//     movies.insertAdjacentHTML('beforeend', mov(data));
// }
// Поиск по названию фильма
function onSearch(e) {
    e.preventDefault();
   
    const search = `${API_URL_SEARCH}${e.currentTarget.elements.searchQuery.value}`;
    console.log(search)
    if (e.currentTarget.elements.searchQuery.value) {
        getMovies(search)
    }
   e.currentTarget.elements.searchQuery.value = "";
}