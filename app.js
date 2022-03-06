const swiper = new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    //effect: "coverflow",
    coverflowEffect: {
        rotate: 20,
        slideShadows: false
    },
    centeredSlides: true,
    freeMode: {
        enabled: true,
        sticky: true
    },
    mousewheel: {
        enable: true
    },
    grabCursor: true,
    loop: true,
    pagination: {
        el: null
    }

});

// Now you can use all slider methods like
swiper.slideNext();