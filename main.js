const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const navLinks = document.querySelectorAll(".nav-menu .nav-item");

let date = new Date();
document.querySelector("footer .year").innerHTML = date.getFullYear();

openMenuButton.addEventListener("click", () => {
  document.body.classList.toggle("show-menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    openMenuButton.click();
  });
});

closeMenuButton.addEventListener("click", () => openMenuButton.click());

/* Intialize Swiper */
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
