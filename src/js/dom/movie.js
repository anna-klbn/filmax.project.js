
const API_KEY = "a80bb377f6b7e60d939d42f267fc679a";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;


import { refs } from "../common/refs";
  

getPopularMovies(`${BASE_URL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);

function getPopularMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results)
    })
}

function showMovies(data) {
    
    refs.moviesContainer.innerHTML = "";
    data.forEach(movie => { 
        const { title, poster_path, vote_average, release_date} = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img
            src="${IMAGE_URL+poster_path}"
            alt="${title}"
            class="movie-img"
          />
          <div class="movie-info">
            <h3 class="movie-title">
             ${title}
              <span class="${getColor(vote_average)}">${vote_average.toFixed(1)}</span>
            </h3>
            <h3 class="movie-data">${release_date}</h3>`
        refs.moviesContainer.appendChild(movieEl);
        
    })
};

function getColor(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}




getTopMovies(`${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`);

function getTopMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showTopMovies(data.results)
    })
}

function showTopMovies(data) {
    
    refs.topContainer.innerHTML = ""
    data.forEach(movie => { 
        const { title, poster_path, vote_average, release_date} = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img
            src="${IMAGE_URL+poster_path}"
            alt="${title}"
            class="movie-img"
          />
          <div class="movie-info">
            <h3 class="movie-title">
             ${title}
              <span class="${getColor(vote_average)}">${vote_average.toFixed(1)}</span>
            </h3>
            <h3 class="movie-data">${release_date}</h3>`
        refs.topContainer.appendChild(movieEl);
        
    })
};



getUpcomingMovies(`${BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`);

function getUpcomingMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showUpcomingMovies(data.results)
    })
}

function showUpcomingMovies(data) {
    
    refs.upcomingContainer.innerHTML = ""
    data.forEach(movie => { 
        const { title, poster_path, vote_average, release_date} = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `<img
            src="${IMAGE_URL+poster_path}"
            alt="${title}"
            class="movie-img"
          />
          <div class="movie-info">
            <h3 class="movie-title">
             ${title}
              <span class="${getColor(vote_average)}">${vote_average.toFixed(1)}</span>
            </h3>
            <h3 class="movie-data">${release_date}</h3>`
        refs.upcomingContainer.appendChild(movieEl);
        
    })
};




let searchQuery = "";

refs.form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery= e.currentTarget.searchQuery.value;

    if (searchQuery) {
        getPopularMovies(`${SEARCH_URL}&query=${searchQuery}`);
    }
   
})


