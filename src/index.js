import "./main.css";


const API_KEY = "11d6fe83-6e82-4b2e-b702-0a2f013b31cc";
const API_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const form = document.querySelector(".form");
const formBtn = document.querySelector(".btn");
const moviesEl = document.querySelector(".movies");
const modalEl = document.querySelector('.modal');

form.addEventListener('submit', onSearch);

showMovies();

async function getMovies(url) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        }
    })
  return await response.json()
}


function markupMovies(data) {
  document.querySelector(".movies").innerHTML = "";

    data.items.map((item) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `<div class="movie__cover-inner">
             <img
               src="${item.posterUrl}"
               class="movie__cover"
               alt="${item.nameRu}"
             />
             <div class="movie__cover--darkenet"></div>
          </div>
           <ul class="movie__info">
             <li class="movie__title">${item.nameRu}</li>
             <li class="movie__category">${item.genres.map(genre => `${genre.genre}`)}</li></ul>
             <div class="movie__rating">${item.ratingKinopoisk}</div>
           </div`;
      moviesEl.appendChild(movieEl);
    });
}
function showMovies() {
  const movies = getMovies(API_URL).then(movies => markupMovies(movies));
  
}


// Поиск по названию фильма
 function onSearch(e) {
    e.preventDefault();
   
    const search = `${API_URL_SEARCH}${e.currentTarget.elements.searchQuery.value}`;
    console.log(search)
    if (e.currentTarget.elements.searchQuery.value ) {
        getMovies(search)
    }
   e.currentTarget.elements.searchQuery.value = "";
}



// MODAL

modalEl.innerHTML = `<div class="modal__card">
<img class="modal__movie-img" src="" alt="" />
      <h2>
        <span class="modal__movie-title"></span>
        <span class="modal__movie-year"></span>
      </h2>
      <ul>
        <li class="modal__movie-ganre"></li>
        <li class="modal__movie-time"></li>
        <li><a class="modal__movie-site"></a></li>
        <li class="modal__movie-overview"></li>
      </ul>
       <button type="button" class="modal__close"></button>
       </div>`;


