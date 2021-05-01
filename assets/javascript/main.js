$(function () {
    "use strict";

    // navbar
    $('.nav-open').on('click', function (e) {
        if ($('.navbar-nav').hasClass('close')) {
            $('.navbar-nav').removeClass('close');
        }
        $('.navbar-nav').addClass('open');
    });

    $('.nav-close').on('click', function (e) {
        if ($('.navbar-nav').hasClass('open')) {
            $('.navbar-nav').removeClass('open');
        }
        $('.navbar-nav').addClass('close');
    });

    // Service carousel
    $('.services-carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    // Testimonial Carousel
    $('.testimonial-carousel').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    });
})