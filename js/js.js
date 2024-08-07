var carouselwidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('carousel-control-next').on('click', function(){
    if (scrollPosition < (carouselwidth - (cardWidth * 4))){
        scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
    
});




