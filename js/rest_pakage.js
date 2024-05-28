var swiper = new Swiper(".room_swiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    loop: true,
});
/*speacial_swiper*/
var swiper = new Swiper(".speacial_swiper", {
    slidesPerView: "auto",
    spaceBetween: 42,
    centeredSlides: true,
});