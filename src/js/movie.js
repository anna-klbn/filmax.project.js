const API_KEY = "a80bb377f6b7e60d939d42f267fc679a";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

const form = document.querySelector('.form');

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

const moviesContainer = document.querySelector('.movies-container');
const topContainer = document.querySelector('.top-container');
const upcomingContainer = document.querySelector('.upcoming-container');
  

getPopularMovies(`${BASE_URL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);

function getPopularMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results)
    })
}

function showMovies(data) {
    
    moviesContainer.innerHTML = ""
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
        moviesContainer.appendChild(movieEl);
        
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.currentTarget.searchQuery.value;
    console.log(value)
    if (value) {
        getPopularMovies(`${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`)
    }
    //  else {
    //     getPopularMovies(`${BASE_URL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
    // }
})



getTopMovies(`${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`);

function getTopMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showTopMovies(data.results)
    })
}

function showTopMovies(data) {
    
    topContainer.innerHTML = ""
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
        topContainer.appendChild(movieEl);
        
    })
};



getUpcomingMovies(`${BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`);

function getUpcomingMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showUpcomingMovies(data.results)
    })
}

function showUpcomingMovies(data) {
    
    upcomingContainer.innerHTML = ""
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
        upcomingContainer.appendChild(movieEl);
        
    })
};