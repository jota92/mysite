$(function(){
$(".mainSite").css("display", "none");
setTimeout(function() {
    $('.anime').fadeOut();
	}, 5000);
});

$(function(){
    $(".mainSite").css({opacity:'0'});
    setTimeout(function(){
    $(".mainSite").css("display", "block");
    $(".mainSite").stop().animate({opacity:'1'},1000);
    },3000);
});