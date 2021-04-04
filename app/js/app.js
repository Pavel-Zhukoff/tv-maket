// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
// require('~/node_modules/jcarousellite/jcarousellite.js')
const Swiper = require('~/app/js/carousel.js')
const Scrollbar = require("~/app/js/jquery.scrollbar.js");


document.addEventListener('DOMContentLoaded', () => {
    let arrayLength = $('.daily-shows_panel').find('.card').length;
    $('#tvprogram').scrollbar({
        "autoScrollSize": false,
        "scrolly": $('.external_scrollbar')
    });
    $('#moreprog').scrollbar({
        "autoScrollSize": false,
        "scrolly": $('.external_scrollbar')
    });
    const daily = new Swiper('.daily-shows_panel', {
        slideToClickedSlide: true,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: arrayLength-3,
        cssMode: false,
        slidesOffsetAfter: -40,
        navigation: {
            nextEl: '.daily-shows_controls__left .arrow',
            prevEl: '.daily-shows_controls__right .arrow',
        },
        breakpoints: {
          780: {
              slidesPerView: 1,
              initialSlide: 2,
              slidesOffsetAfter: 0,
              spaceBetween: 16,
          },
        },
        on: {
            init() {
                updateClasses(this);
            },
            slideChange() {
                updateClasses(this);
            },
        },
    });
    if (window.innerWidth < 780) {
        $(".navigation-mobile .nav-button").on("click", function (event){
            if ($(".navigation-mobile .nav-menu-container").hasClass("nav-menu-container_active")) {
                $(".nav-menu-container_active").toggleClass("nav-menu-container_active");
                $(".navigation-mobile").toggleClass("nav-menu_active");
            } else {
                $(".navigation-mobile").toggleClass("nav-menu_active");
                $(".navigation-mobile .nav-menu-container").toggleClass("nav-menu-container_active")
            }
        });
        $(".search_button").on("click", function (event) {
            $(".navigation-mobile").toggleClass("nav-menu_search-active");
        });

    }
    if (window.innerWidth > 780) {
        const newscont = new Swiper('.swiper-contein', {
            slideToClickedSlide: true,
            slidesPerView: 1,
            // loop:true,

            navigation: {
                nextEl: '.newsnext',
                prevEl: '.newsback',
            },
            pagination: {
                el: '.slider-dots',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="slider-dots_dot ' + className + '"></div>';
                },
            },
        });
    }
    function updateClasses({ $el, slides, activeIndex }) {
        $el.find('.swiper-slide-prev-prev').removeClass('swiper-slide-prev-prev');
        slides.eq(activeIndex).prev().prev().addClass('swiper-slide-prev-prev');

        $el.find('.swiper-slide-next-next').removeClass('swiper-slide-next-next');
        slides.eq(activeIndex).next().next().addClass('swiper-slide-next-next');
    }
    $(".promo .promo_close").ready(function () {
        $(".promo .promo_close").on("click", function(event) {
            event.preventDefault();
            $(".promo").fadeToggle();
        })
    })

    $("a.menu-container_socials").on("click", function (event) {
        event.preventDefault();
        $("nav .menu-container_left, nav .menu-container_right__items").hide();
        $("nav .menu-container__socials").css('display', 'flex');
    })
    $("a.menu-container__socials_close").on("click", function (event) {
        event.preventDefault();
        $(" nav .menu-container__socials").hide();
        $("nav .menu-container_left").css("display", "flex")
        $("nav .menu-container_right__items").css("display", "block")
    })

    $("a.menu-container_search").on("click", function (event) {
        event.preventDefault();
        $("nav .menu-container_left, nav .menu-container_right, nav .menu-container__socials").hide();
        $("nav .menu-container").css("justify-content", "flex-end")
        $("nav .menu-container__search").css('display', 'flex');
    })

    $("a.menu-container__search_close").on("click", function (event) {
        event.preventDefault();
        $("nav .menu-container__search").hide();
        $("nav .menu-container").css("justify-content", "space-between")
        $("nav .menu-container_left, nav .menu-container_right").css('display', 'flex');
    })
    $(".contact-form input, .contact-form textarea").ready(function () {
        $(".contact-form input, .contact-form textarea").on("focus", function (event) {
            if (!$(".contact-form .contact-form_submit").hasClass("contact-form_submit__active"))
                $(".contact-form .contact-form_submit").addClass("contact-form_submit__active")
        })
        $(".contact-form input, .contact-form textarea").on("blur", function (event) {
            if ($(".contact-form .contact-form_submit").hasClass("contact-form_submit__active"))
                $(".contact-form .contact-form_submit").removeClass("contact-form_submit__active")
        })

        $(".contact-form input, .contact-form textarea").on('change', function () {
            if ($(".contact-form input, .contact-form textarea").val().length > 0 &&
                !$(".contact-form .contact-form_submit").hasClass("contact-form_submit__active"))
                $(".contact-form .contact-form_submit").addClass("contact-form_submit__active")

        })
    })

    $(".button-up").ready(function () {
        const goTopBtn = document.getElementById('button-up');

        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);
        function trackScroll() {
            let scrolled = window.pageYOffset;
            let coords = document.documentElement.clientHeight / 3;

            if (scrolled > coords) {
                goTopBtn.style.display = 'flex';
            }
            if (scrolled < coords) {
                goTopBtn.style.display = 'none';

            }
        }
        function backToTop() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -80);
                setTimeout(backToTop, 0);
            }
        }
    })
})

