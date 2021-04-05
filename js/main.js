
  const swiper = new Swiper(".swiper-container", {

    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    centeredSlides: true,
    //updateOnWindowResize: false,
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

  //Активация кнопок слайдера Наши проекты
  swiper.on('slideChange', function() {
    if ( swiper.activeIndex == 0 ) {
      document.querySelector(".our-project__slider-arrow--prev").classList.toggle('our-project__slider-arrow--noactiv');
    }
    else if ( swiper.activeIndex == swiper.slides.length - 1 ) {
      swiper.slideTo( swiper.slides.length - 1 ),
      document.querySelector(".our-project__slider-arrow--next").classList.toggle('our-project__slider-arrow--noactiv');
    } else if ( swiper.activeIndex != 0 && swiper.activeIndex != swiper.slides.length - 1 ) {
      var arrowButtonPrev = $(".our-project__slider-arrow--prev");
      var arrowButtonNext = $(".our-project__slider-arrow--next");
      arrowButtonPrev.removeClass("our-project__slider-arrow--noactiv");
      arrowButtonNext.removeClass("our-project__slider-arrow--noactiv");
    }       
  });

  if ( swiper.activeIndex == 0 ) {
    document.querySelector(".our-project__slider-arrow--prev").classList.toggle('our-project__slider-arrow--noactiv');
  } 




  //Слайдер отзывов
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
          //centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 1,
        },
    },

    navigation: {
      nextEl: ".reviews__slider-button-next",
      prevEl: ".reviews__slider-button-prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function() {
    document.querySelector(".navbar__text-container").classList.toggle('navbar__text-container--visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalOverlay = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  $(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  });

  function openModal() {
    
    var targetModal = $(this).attr('data-href');
    console.log(targetModal);
    $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
    $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Напишите Ваше имя",
          minlength: "Имя должно быть длиннее 2-х символов"
        },
        email: {
          required: "Напишите Ваш email",
          email: "Почта должна быть вида: name@domain.com"
        },
        phone: {
          required: "Напишите Ваш телефон",
          minlength: "Слишком короткий номер"
        },
      },
    });
  })
  $(".phone").mask("+7 (999) 999-99-99");




// window.addEventListener('resize',function(){
//   if (window.matchMedia("(min-width: 1200px)").matches) {
//     console.log("1200");
//   } else if (window.matchMedia("(min-width: 992px) & (max-width: 992px)").matches){
//     console.log("992");
//   } else if (window.matchMedia("(min-width: 768px)").matches){
//   console.log("768");
//   } else if (window.matchMedia("(min-width: 576px)").matches){
//   console.log("576");
//   } else if (window.matchMedia("(min-width: 320px)").matches){
//     console.log("320");
// }
// });
