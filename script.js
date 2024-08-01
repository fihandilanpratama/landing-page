const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// Custom navigation buttons for mobile
const slidePrev = () => {
    swiper.slidePrev();
}

const slideNext = () => {
    swiper.slideNext();
}