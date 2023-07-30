$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.header-transparent').addClass("active")
    } else {
        $('.header-transparent').removeClass("active")
    };
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.mobile-menu').addClass("active")
    } else {
        $('.mobile-menu').removeClass("active")
    };
});


$(document).ready(function () {
    $('.singel-slider-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: "<div class='slide-button'><i class='fa fa-arrow-left'></i></div>",
        prevArrow: "<div class='slide-button'><i class='fa fa-arrow-right'></i></div>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



$(document).ready(function () {
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: "<div class='testimonial-slide-button'><i class='fa fa-arrow-left'></i></div>",
        prevArrow: "<div class='testimonial-slide-button'><i class='fa fa-arrow-right'></i></div>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});