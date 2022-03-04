const swiper = new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 1.5,
    spaceBetween: 10,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 20,
        slideShadows: false
    },
    centeredSlides: true,
    freeMode: {
        enabled: true,
        sticky: true 
    },
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
    
  });
  
  // Now you can use all slider methods like
  swiper.slideNext();
  