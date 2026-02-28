const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".card__slider__arrow-right",
    prevEl: ".card__slider__arrow-left",
  },
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
