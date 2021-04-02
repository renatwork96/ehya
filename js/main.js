
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      1200: {
        spaceBetween: 30,
      },
      992: {
        spaceBetween: 20,
      },
      768: {
        slidesOffsetBefore: -200,
        initialSlide: 0,
        spaceBetween: 20,
      },
      576: {
        centeredSlides: true,
        slidesOffsetBefore: -120,
        initialSlide: 0,
        spaceBetween: 20,
      },
      320: {
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 0,
      },
    },

    navigation: {
      nextEl: ".our-project__slider-arrow--next",
      prevEl: ".our-project__slider-arrow--prev",
    },
  });

  const reviewsSlider = new Swiper(".reviews-swiper-container", {
    // Optional parameters
    loop: true,
    spaceBetween: 25,
    slidesPerView: 2,
    breakpoints: {
      993: {
          spaceBetween: 25,
          slidesPerView: 2,
        },
      320: {
          slidesPerView: 1,
        },
    },

    navigation: {
      nextEl: ".reviews-slider__button-next",
      prevEl: ".reviews-slider__button-prev",
    },
  });

