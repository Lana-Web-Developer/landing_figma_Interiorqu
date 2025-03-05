"use strict";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slideToClickedSlide: true,
  slidesPerView: 3,
  centeredSlides: false,
  initialSlide: 5,
  loop: true,
  loopedSlides: 4,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
