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
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        slidesOffsetAfter: 0,
        loop: false,
        navigation: {
            nextEl: '.daily-shows_controls__left .arrow',
            prevEl: '.daily-shows_controls__right .arrow',
        },
        breakpoints: {
            // when window width is >= 320px
            790: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            220: {
                initialSlide: 0,
                slidesPerView: 1,
                spaceBetween: 20,
                loop: false
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

        $el.find('.swiper-slide-prev-prev-prev').removeClass('swiper-slide-prev-prev-prev');
        slides.eq(activeIndex).prev().prev().prev().addClass('swiper-slide-prev-prev-prev');

        $el.find('.swiper-slide-next-next-next').removeClass('swiper-slide-next-next-next');
        slides.eq(activeIndex).next().next().next().addClass('swiper-slide-next-next-next');

        $el.find('.swiper-slide-4').removeClass('swiper-slide-4');
        slides.eq(activeIndex).next().next().next().next().addClass('swiper-slide-4');

        $el.find('.swiper-slide-5').removeClass('swiper-slide-5');
        slides.eq(activeIndex).next().next().next().next().next().addClass('swiper-slide-5');

        $el.find('.swiper-slide-6').removeClass('swiper-slide-6');
        slides.eq(activeIndex).next().next().next().next().next().next().addClass('swiper-slide-6');

        $el.find('.swiper-slide-7').removeClass('swiper-slide-7');
        slides.eq(activeIndex).next().next().next().next().next().next().next().addClass('swiper-slide-7');

        $el.find('.swiper-slide-8').removeClass('swiper-slide-8');
        slides.eq(activeIndex).next().next().next().next().next().next().next().next().addClass('swiper-slide-8');
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

    const slideform = new Swiper('.sliderformat', {
        slideToClickedSlide: true,
        loop: true,
        allowTouchMove: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.control .next',
            prevEl: '.control .prev',
        },
        on: {
            init() {
                updateClasses(this);
            },
            slideChange() {
                updateClasses(this);
            },
        },
    })

    const slideprog = new Swiper('.swiper-cct', {
        slideToClickedSlide: false,
        loop: false,
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        navigation: {
            nextEl: '.arrownext',
            prevEl: '.arrowback',
        },
        on: {
            init() {
                updateClasses(this);
            },
            slideChange() {
                updateClasses(this);
            },
        },
    })
    let video = videojs('teleefir', {
        autoplay: true,
        muted: true,
        controls: true,
        poster: 'images/dist/poster.png',
    });
    var _0x3e0d=["\x68\x74\x74\x70\x3A\x2F\x2F\x38\x32\x2E\x31\x33\x38\x2E\x32\x2E\x35\x30\x3A\x31\x39\x33\x35\x2F\x6C\x69\x76\x65\x2F\x54\x65\x6F\x54\x56\x2E\x73\x74\x72\x65\x61\x6D\x5F\x37\x32\x30\x70\x2F\x70\x6C\x61\x79\x6C\x69\x73\x74\x2E\x6D\x33\x75\x38","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x6D\x70\x65\x67\x55\x52\x4C","\x73\x72\x63"];video[_0x3e0d[2]]({src:_0x3e0d[0],type:_0x3e0d[1],withCredentials:false})


    $('.buttons_pause').click(function () {
        $('.stopb').toggleClass('active')
        $('.playb').toggleClass('active')
        $('.vjs-play-control').click()
    })
    $('.buttons_audio').click(function () {
        $('.muteb').toggleClass('active')
        $('.unmuteb').toggleClass('active')
        $('.vjs-mute-control').click()
    })
    $('.buttons_fullscreen').click(function () {
        $('.vjs-fullscreen-control').click()
    })
    $('.vjs-fullscreen-control').click(function () {
        $('.video').toggleClass('fullnonactive')
        $('.vjs-control-bar').toggleClass('contactive')
    })
})
$('.selprogview').click(function () {
    $('.selprogview').removeClass('active')
    $(this).addClass('active')
    $('.menusel').removeClass('actives')
    $(`.menusel[data-menu=${$(this).attr('data-toggle')}]`).addClass('actives')
    $('.listprog').toggleClass('active')
    $('.close').toggleClass('active')
    $('.open').toggleClass('active')
})
$('#selec').click(function () {
    $('.listprog').toggleClass('active')
    $('.close').toggleClass('active')
    $('.open').toggleClass('active')
})
$('.more').click(function () {
    $('.content').toggleClass('active')
    $('.opentx').toggleClass('active')
    $('.closetx').toggleClass('active')
})
$('.prog_menu-drop').mouseenter(function () {
    $('.programs__contain-menu').addClass('activepm')
})
$('.programs__contain-menu').mouseleave(function(){
    $('.programs__contain-menu').removeClass('activepm')
});
$('.categoryart').click(function () {
    $(this).toggleClass('active')
})
$('.popular').click(function () {
    $('.popsort').toggleClass('active')
    $(this).addClass('active')
    $('.newest').removeClass('active')
})
$('.newest').click(function () {
    $('.newsort').toggleClass('active')
    $(this).addClass('active')
    $('.popular').removeClass('active')
})

$('.prog_touch').click(function () {
    $('.tvprogram-list__current').addClass('nonactive')
    $('.prog_touch').removeClass('prog_current')
    $(this).toggleClass('prog_current')
})
$('.tvprogram-list__current').click(function () {
    $(this).removeClass('nonactive')
    $('.prog_touch').removeClass('prog_current')
})
