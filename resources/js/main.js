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
    
    var options = {
        showOnBottom: false,
        animationDuration: 100
    };

    $(".navbar-fixed-top").autoHidingNavbar(options);
});

