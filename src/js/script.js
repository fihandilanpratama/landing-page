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

// mobile menu toggle event
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu-btn');
  const mobileMenuClose = document.querySelector('.menu-btn-close');
  const mobileMenuList = document.querySelector('.mobile-menu-list');

  // tampilkan menu
  mobileMenu.addEventListener('click', () => {
      mobileMenuList.classList.remove('hidden')
      mobileMenuList.classList.add('flex')
      setTimeout(() => {
        mobileMenuList.classList.remove('translate-x-[100%]')
        mobileMenuList.classList.add('translate-x-0')
      }, 10)
  })

  // menututup menu
  mobileMenuClose.addEventListener('click', () => {
    mobileMenuList.classList.remove('translate-x-0')
    mobileMenuList.classList.add('translate-x-[100%]')
    setTimeout(() => {
      mobileMenuList.classList.add('hidden')
      mobileMenuList.classList.remove('flex')
    }, 300)
  })
})