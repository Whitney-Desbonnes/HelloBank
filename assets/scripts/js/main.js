// swiper on
let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

// swipper off
let removeSlide = document.querySelectorAll('.swiper-slide');

function resizeSwiper () {
  if(window.innerWidth >= 768){
    for (i=0; i<removeSlide.length; i++) {
      removeSlide[i].classList.remove('swiper-slide');
    }
  }
  else if(window.innerWidth <= 767) {
    for (i=0; i<removeSlide.length; i++) {
      removeSlide[i].classList.add('swiper-slide');
      removeSlide[i].classList.remove('swiper-slide--off');
    }
  }
}

window.addEventListener('resize', resizeSwiper);
window.addEventListener('load', resizeSwiper);
