(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('').css('top', 0);
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


})(jQuery);

$(document).ready(function(){
    const img1 = document.querySelector('.image-ani1'),
        img2 = document.querySelector('.image-ani2'),
        img3 = document.querySelector('.image-ani3'),
        img4 = document.querySelector('.image-ani4');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;

    addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;
        img1.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        img2.style.transform = `translate3d(-${mouseX/2}%, -${mouseY/2}%, 0)`;
        img3.style.transform = `translate3d(-${mouseX/4}%, -${mouseY/4}%, 0)`;
        img4.style.transform = `translate3d(-${mouseX/6}%, -${mouseY/6}%, 0)`;
    });

});
$(document).ready(function(){
    const bg = document.querySelector('.image-ani-main');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;

    addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;

      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });

});


