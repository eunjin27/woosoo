/*화살표 영역을 밖으로 빼고싶을 때. navigation부분 확인합니다! 다른건 동일*/
var swiper = new Swiper(".card4_out", {
    navigation: {
        nextEl: ".card4_out_next",
        prevEl: ".card4_out_prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    loop: true,/*4번째 이미지에서 다음 키를 누르면 바로 첫번째 이미지가 나오게 한다*/
    slidesPerView: "auto",/*한번에 보이는 slide개수 설정*/
    spaceBetween: 0,/*슬라이드 사이의 공간 설정*/


});


/*스와이퍼 슬라이드 사이에 여백설정은 
    slidesPerView: "auto"
    spaceBetween: 0
    일단 만들어 두고 시작해야 함.
     
    그런다음. 슬라이드사이에 여백은 css에서 마진이나.
    js에서 스페이스비트윈으로 설정 

    그래야 정상동작이 됨
    */
