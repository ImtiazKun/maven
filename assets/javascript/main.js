"use strict";
$(function() {
    
    // navbar
    $('.nav-open').on('click', function(e) {
        if ($('.navbar-nav').hasClass('close')) {
            $('.navbar-nav').removeClass('close');
        }
        $('.navbar-nav').addClass('open');
    });

    $('.nav-close').on('click', function(e) {
        if ($('.navbar-nav').hasClass('open')) {
            $('.navbar-nav').removeClass('open');
        }
        $('.navbar-nav').addClass('close');
    });

})