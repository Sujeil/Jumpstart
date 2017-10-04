$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    
    var howFarScrolled = 0;

    $(window).scroll(function() {
        var scrolledFromTop = $(this).scrollTop();

        if (scrolledFromTop - howFarScrolled > 50) {
            var heightOfNavbar = $('.navbar').css('height');

            $('.navbar').animate({
                top: '-' + heightOfNavbar 
                }, 150);
                howFarScrolled = heightOfNavbar;       
        } else{
            $('.navbar').animate({
                top: 0
                }, 150);
                howFarScrolled = heightOfNavbar;
        }
      });

     
      
});

