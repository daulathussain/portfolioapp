////////////////////////////////////////////
//SLIDER JAVASCRIPT SECTION
///////////////////////////////////////////

const sliderStart = function () {
  const rightBtn = document.querySelector(".right-btn");
  const leftBtn = document.querySelector(".left-btn");
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const dots = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //////////////////////////////

  const createDots = function () {
    slides.forEach((_, i) => {
      dots.insertAdjacentHTML(
        "beforeend",
        `<button class="dot bg-light-yellow" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };

  //////////////////////////////

  // ///////////////////////////////////

  const goToSlide = function (slide) {
    slides.forEach(
      (silde, i) =>
        (silde.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // //////////////////////////////////////

  ///////////////////////////////////
  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  };
  init();
  ////////////////////////////////

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };
  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  leftBtn.addEventListener("click", nextSlide);
  rightBtn.addEventListener("click", preSlide);
  ////////////////////////////
  //Key control
  //////////////////////////////

  document.addEventListener("keydown", (e) => {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && preSlide();
  });

  dots.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      console.log("hey");
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};

sliderStart();
