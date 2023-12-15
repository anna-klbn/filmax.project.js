import axios from "axios";

const API_KEY = "a80bb377f6b7e60d939d42f267fc679a";
const BASE_URL = "https://api.themoviedb.org/3";


// Популярні фільми
async function getPopularMovies(page) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
        // if (response status != 200) {
        //     throw new Error('Not found')
        // }
        
    return response.data;
    }
    catch (error) {
        return error
    }
}

// Рейтингові фільми
async function getRatedMovies(page){
 try {
        const response = await axios.get(`${BASE_URL}/rated/movies?api_key=${API_KEY}&page=${page}`)
        // if (response status != 200) {
        //     throw new Error('Not found')
        // }
    return response.data;
    }
    catch (error) {
        return error
    }
}



// Що очікуються
async function getUpcomingMovies(page){
 try {
        const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`)
        // if (response status != 200) {
        //     throw new Error('Not found')
        // }
    return response.data;
    }
    catch (error) {
        return error
    }
}


// Пошук по назві фільма
async function onSearchMovies(text, page = 1) {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}&page=${page}`);
        return response.data;
    }
     catch (error) {
        return error
    }
}

export {
    getPopularMovies, getRatedMovies, getUpcomingMovies, onSearchMovies

}