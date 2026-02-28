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

const materialLists = document.querySelectorAll(".card__materials__block");

materialLists.forEach((list) => {
  list.addEventListener("click", (e) => {
    const item = e.target.closest(".card__materials__variant");

    if (!item) return;

    const currentActive = list.querySelector(
      ".card__materials__variant.active",
    );

    if (currentActive) {
      currentActive.classList.remove("active");
    }

    item.classList.add("active");
  });
});

const zoomBtns = document.querySelectorAll(".card__btn-fullscreen");
const modalWindow = document.querySelector(".modal__window");
const modalContent = document.querySelector(".modal__window__content");

zoomBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalWindow.classList.add("opened");
    document.body.style.overflow = "hidden";

    const activeSlide = btn
      .closest(".card")
      .querySelector(".swiper-slide-active");
    const activeSlideImg = getComputedStyle(activeSlide).backgroundImage;
    modalContent.style.backgroundImage = activeSlideImg;
  });
});

modalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("opened");
  document.body.style.overflow = "";
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const interactiveElements =
      ".card__slider__arrow-left, .card__slider__arrow-right, .card__btn-fullscreen, .card__footer__likes, .card__price__block-btn, .card__footer__link, .swiper-pagination, .card__materials__block";
    if (e.target.closest(interactiveElements)) {
      return;
    }
    window.open("/card", "_blank");
  });
});

const likeBtns = document.querySelectorAll(".card__footer__likes");

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
});
