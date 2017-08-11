$(document).ready(function(){
    $(".picture__animated-code").addClass("animate");
    $(".infographics__graphic").addClass("animate");
    $(".market__image-animation").addClass("animate");
    $(window).scroll(function(){
        var position = $(this).scrollTop();
        $(".banner__cloud").css({
           "transform": "translateY(-" + position / 8 + "%)"
        });
    });
    $(".picture__button:nth-of-type(1)").click(function(){
        $(".picture__baloon_01").addClass("visible");
    });
    $(".picture__button:nth-of-type(2)").click(function(){
        $(".picture__baloon_02").addClass("visible");
    });
    $(".picture__button:nth-of-type(3)").click(function(){
        $(".picture__baloon").removeClass("visible");
    });
    $(window).resize(function(){
        $(".picture__baloon").removeClass("visible");
    });
});
