 window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

//menu mobile
$('.header__navigation-button').on('click', function() {
    $('body').toggleClass('no-scroll');
    $('.header__navigation').toggleClass('opened');
})


$(document).ready(function (){

})

//Sticky
$(window).scroll(function(){
    const bannerHeight = $('.header').outerHeight();
    if($(window).scrollTop() >= bannerHeight) {
        $('.header__wrapper').addClass('sticky');
    }
    else {
        $('.header__wrapper').removeClass('sticky');
    }
})

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



