import { refs } from "../common/refs";

refs.menuContainer.innerHTML = `<nav class="site-nav">
            <ul class="site-nav__list">
              <li class="site-nav__item">
                <a class="site-nav__link" href="./popular.html">Popular</a>
              </li>
              <li class="site-nav__item">
                <a class="site-nav__link" href="./top-rated.html">Top rated</a>
              </li>
              <li class="site-nav__item">
                <a class="site-nav__link" href="./upcoming.html">Upcoming</a>
              </li>
            </ul>
          </nav>`

refs.menuBtn.addEventListener("click", () => {
    const expanded = refs.menuBtn.getAttribute("aria-expanded") === "true" || false;

  refs.menuBtn.classList.toggle("is-open");
  
    refs.menuBtn.setAttribute("aria-expanded", !expanded);

  refs.mobileMenu.classList.toggle("is-open");
});
  // const openModalBtn = document.querySelector('[data-menu-open]');
// openModalBtn.addEventListener('click', toggleModal);
  
// function toggleModal() {
//     document.body.classList.toggle("menu-open");
// }
