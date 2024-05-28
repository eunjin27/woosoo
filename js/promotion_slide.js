/*프로모션 슬라이드*/
var swiper = new Swiper(".promotion", {
  slidesPerView: "auto",
  spaceBetween: 32,
  pagination: {
    el: ".nb_pag",
    clickable: true,
  },
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: true,
});
/*글자슬라이드 */
var swiper = new Swiper(".sentence_box", {
  direction: "vertical",
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  loop: true,
});
