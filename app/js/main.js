$(function(){

    $('.header__images').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        fade: true,

    });

    $('.btn__menu').on('click',function(){
        $('.menu-list').addClass('active');
        $('.header__menu-inner').addClass('active');
        $('.btn__menu').addClass('active');
        $('span').addClass('active');
    });

    $('.close-menu').on('click',function(){
        $('.menu-list').removeClass('active');
        $('.header__menu-inner').removeClass('active');
        $('.btn__menu').removeClass('active');
        $('span').removeClass('active');
    });

    $('.btn--mobile').on('click', function (){
        $('.menu-list').slideToggle();
    })

});