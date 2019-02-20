

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mySwiperTeam = new Swiper('.swiper-container-team', {
    // Optional parameters
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: false,
    effect: 'slide',

    // off touch for destop
    touchMoveStopPropagation:false,
    simulateTouch : false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      575: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
