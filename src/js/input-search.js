import { refs } from "./refs";
import { onSearchMovies } from "./fetch";

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const value = e.currentTarget.searchQuery.value;
    // if (!value) {
    //     refs.inputSearch.value = "";
    //     refs.inputSearch.textContent = "ERROR";
    // }
    // const response = onSearchMovies(value);
    // const movieArr = response.results;

}
