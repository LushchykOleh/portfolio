 window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

//menu mobail
$(document).ready(function () {
    $('.menu').on('click', function () {
        $('.navigation').slideToggle();
    })
});

$(window).resize(function () {
    const windowWidth = $(window).outerWidth();
    if(windowWidth > 750){
        $('.navigation').attr('style');
    }
})
//--

//Anchor links
$('a').on('click', function (e) {
    e.preventDefault();
    const hh = $('.header').outerHeight();
    if(this.hash !=='') {
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - hh
        }, 360, function () {
            window.location.hash = hash - hh;
        })
    }
})



Swiper.use([ Autoplay, Navigation, Pagination ]);


    //Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();
})

$(window).scroll(function () {
    const headerHeight = $('.header').outerHeight();
    const bannerHeight = $('.main-banner').outerHeight();
    if($(window).scrollTop() >= (bannerHeight - headerHeight)) {
        $('.header').addClass('sticky');
    }
    else {
        $('.header').removeClass('sticky');
    }
})