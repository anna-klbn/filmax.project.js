const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const menuContainerRef = document.querySelector(".menu-container");
menuContainerRef.innerHTML = `<nav class="site-nav">
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

menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  menuBtnRef.classList.toggle("is-open");
  
    menuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle("is-open");
});
  // const openModalBtn = document.querySelector('[data-menu-open]');
// openModalBtn.addEventListener('click', toggleModal);
  
// function toggleModal() {
//     document.body.classList.toggle("menu-open");
// }
