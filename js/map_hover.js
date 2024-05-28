$(function () {

    $(".map_point1").mouseover(function () {
        $(".map_paper1").stop().fadeIn(500);

    });
    $(".map_point1").mouseout(function () {
        $(".map_paper1").stop().fadeOut(500);

    });

    $(".map_point2").mouseover(function () {
        $(".map_paper2").stop().fadeIn(500);

    });
    $(".map_point2").mouseout(function () {
        $(".map_paper2").stop().fadeOut(500);

    });

    $(".map_point3").mouseover(function () {
        $(".map_paper3").stop().fadeIn(500);

    });
    $(".map_point3").mouseout(function () {
        $(".map_paper3").stop().fadeOut(500);

    });

    $(".map_point4").mouseover(function () {
        $(".map_paper4").stop().fadeIn(500);

    });
    $(".map_point4").mouseout(function () {
        $(".map_paper4").stop().fadeOut(500);

    });

});

//stop을 써줘야 연속적으로 마우스를 호버했을때, 버벅이는 오류가 나지 않는다. 초가 너무 길면 충돌현상이 일어날 수 있다.