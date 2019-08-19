$(document).ready(function () {
    'use strict';
    
//// on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.main-header').addClass('header-scroll');
            $('.main-section .section-content .social .social-list li').addClass('social-scroll');
        } else {
            $('.main-header').removeClass('header-scroll');
            $('.main-section .section-content .social .social-list li').removeClass('social-scroll');
        }
    });
    
//// product slider
    $('.product-section .product-content .product-slider .slides-container').slick({
        slidesToShow: 3,
        nextArrow: '.product-section .product-content .slider-controllers button.next',
        prevArrow: '.product-section .product-content .slider-controllers button.prev',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
//// store slider
    $('.store-section .store-content .store-slider .slides-container').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
//// store slider RTL
    $('.store-section .store-content .store-slider .slides-rtl').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        rtl: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
//// play video
    $('.video-section .video-content .video-control .play a').click(function () {
        $('.video-section .iframe-container').addClass('iframe-active');
    });
    $('.video-section .iframe-container .close-btn').click(function () {
        $('.video-section .iframe-container').removeClass('iframe-active');
    });
    

////// scroll to top
    $('footer .copyrights .copy-content .scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
//// navbar button open 
    $('#navbar-btn').click(function () {
        $('.navbar').addClass('navbar-open');
    });
    $('.navbar .mobile-nav-close button').click(function () {
        $('.navbar').removeClass('navbar-open');
    });
    
    
    
//// switch between categories
    $('.sidebar .cat .cat-list li a').click(function () {
        $('.product-page .store-section').fadeOut();
        $('#' + $(this).data('id')).fadeIn();
    });

    
//// product count
    $('.prod-desc-page .prod-count .count .counter-increase').click(function () {
        var cartQty = $(this).parents('.count').find('.cart-quantity'),
            getVal = cartQty.val();
        getVal++;
        cartQty.val(getVal);
    });
    $('.prod-desc-page .prod-count .count .counter-decrease').click(function () {
        var cartQty = $(this).parents('.count').find('.cart-quantity'),
            getVal = cartQty.val();
        if (getVal > 1) {
            getVal--;
        }
        cartQty.val(getVal);
    });
    
    
//// switch between description / reviews
    $('.prod-desc-page .prod-container .desc-reviews .switch-list li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('.prod-desc-page .prod-container .desc-reviews .desc-reviews-container .content').hide();
        $('#' + $(this).data('id')).show();
    });
    
    
//    var docWidth = document.documentElement.offsetWidth;
//
//    [].forEach.call(
//        document.querySelectorAll('*'),
//        function(el) {
//        if (el.offsetWidth > docWidth) {
//          console.log(el);
//        }
//        }
//    );
});