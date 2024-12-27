const nav__menu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    nav__menu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", function () {
    nav__menu.classList.remove("show-menu");
  });
}

/*Change Background header*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

//swiper
const swiperPopular = new Swiper(".services__swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
