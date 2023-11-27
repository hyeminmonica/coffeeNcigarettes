
const distance = 1500;

function hideOthers(items) {
    for (var item of items) {
        $(`.img-${item}`).hide();
    }
}

$(document).ready(function () {
    $(".img-1").click(function () {
        $(".img-1").css("width", "100%");
    });


    var height = $(window).height();
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll >= 0 && scroll < 1500) {
            $(".container1").hide();
            $(".img-1").fadeIn();
            $(".img-1").css({
                width: (scroll - 5) / 10 + "%"
            });
            hideOthers([2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            
            
        } else if (scroll >= 1500 && scroll < 3000) {
            hideOthers([1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $("body").css("background", "white")
            $("body").css("transition", "background 0s");
            $(".img-2").show();
            $(".img-2").css("transform", `rotate(${(scroll - 67)*2}deg) translate(-50%, -45%)`);
//뱅뱅

        } else if (scroll >= 3000 && scroll < 4500) {
            hideOthers([1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $("body").css("background", "black");
            $(".img-3").show();
            $(".img-3").css({
                width: (scroll - 3000) / 10 + "%"
            });
        } else if (scroll >= 4500 && scroll < 6000) {
            $(".img-3").fadeOut(150);
            $(".boom1").hide();
            $(".boom2").hide();
            $(".boom3").hide();
            hideOthers([1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $(".img-4").show();
            $("body").css("background", "white");
            $("body").css("transition", "background 150ms");
            $(".img-4").css({
                top: `${40 - (scroll - 4500) * (120/1500)}%` , visibility: 'visible'
                // 40 -> 0
                // scroll - 4500 = 0
                // scroll = 6000 => scroll - 4500 = 1500
            });
//img4 위로 올라가기
        } else if (scroll >= 6000 && scroll < 6500) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $(".boom1").show();
        } else if (scroll >= 6500 && scroll < 7000) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $(".boom2").show();
        } else if (scroll >= 7000 && scroll < 7500) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $(".boom3").show();
            $(".container1").css({ visibility: 'hidden'});
//container1 등장           
        } else if (scroll >= 7500 && scroll < 8500) {
            $(".container1").css({ visibility: 'visible'});
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
        } else if (scroll >= 8500 && scroll < 10000) {
            $(".boom1").hide();
            $(".boom2").hide();
            $(".boom3").hide();
            $(".container1").css({ visibility: 'hidden'});
            hideOthers([1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $(".img-6").show();
            $(".img-6").css({
                width: (scroll - 8500) / 1.5 + "%"
            });
        } else if (scroll >= 9500 && scroll < 11000) {
            hideOthers([1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $("body").css("background", "white");
            $(".img-7").show();
            $(".img-7").css({
                left: `${-150 + (scroll - 9500) * (250/1500)}%` , visibility: 'visible'
            });
 //img7 좌우 수평이동           
        } else if (scroll >= 11000 && scroll < 12500) {
            hideOthers([1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17])
            $(".img-8").show();
        
            $("body").css("background", "black");
            $(".img-8").css({
                width: (scroll - 11000) / 20 + "%"
            });
//
        } else if (scroll >= 12500 && scroll < 14000) {
            $(".img-8").fadeOut('slow'); // ms, 'slow', 'fast'
            hideOthers([1, 2, 3, 4, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17])
            $("body").css("background", "black");
            $(".img-9").fadeIn();  
//fadein/out조정가능?
        } else if (scroll >= 14000 && scroll < 14500) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 15, 16, 17])
            $(".img-10").show();  
            $("body").css("background", "black");
        } else if (scroll >= 15000 && scroll < 15500) {

            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 15, 16, 17])
            $(".img-11").show(); 
            $("body").css("background", "black");
        } else if (scroll >= 15500 && scroll < 16000) {

            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 15, 16, 17])
            $(".img-12").show(); 
            $("body").css("background", "black");
        
        } else if (scroll >= 16000 && scroll < 17500) {
            $(".img-13").show();
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17])
            $("body").css("background", "black");
            $(".img-13").css("transform", `rotate(${(scroll+18)*2}deg) translate(-50%, -45%)`);
            $(".img-13").css("scale", `${20 + (scroll - 16000) * (130/1500)}%`);
//회전
        } else if (scroll >= 17500 && scroll < 19000) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17])
            $(".img-14").show();
            $(".img-14").css({
                left: `${-150 + (scroll - 17500) * (250/1500)}%` , visibility: 'visible'
                // -100 -> 100
                // scroll - 9500 = 0
                // -100 + (scroll - 17500) * (100/1500)
            });
            $("body").css("background", "black");
            
//좌우 이동 
        } else if (scroll >= 19000 && scroll < 20000) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17])
            $(".img-15").fadeIn('slow');
            $("body").css("background", "white");
        } else if (scroll >= 20000 && scroll < 21000) {
            hideOthers([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17])
            $(".img-16").show().fadeIn('slow');
        }
    })
})







