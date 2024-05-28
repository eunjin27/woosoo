var swiper = new Swiper(".click_img", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    
  });
  var swiper2 = new Swiper(".click_img2", {
    loop: true,
    spaceBetween: 10,
 
    thumbs: {
      swiper: swiper,
    },
        autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
  });
