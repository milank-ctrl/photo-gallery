const swiper = new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 1.5,
    spaceBetween: 10,
    effect: "coverflow",
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
  // Now you can use all slider methods like
  swiper.slideNext();
  