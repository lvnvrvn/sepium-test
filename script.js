const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".card__slider__arrow-right",
    prevEl: ".card__slider__arrow-left",
  },

  autoplay: window.innerWidth < 768 ? { delay: 3000 } : false,
});

const materialVarients = document.querySelectorAll(".card__materials__variant");

materialVarients.forEach((varient) => {
  varient.addEventListener("click", (e) => {
    materialVarients.forEach((varient) => {
      varient.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
