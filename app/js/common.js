$('.main-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.products-slider').slick({
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.btn-burger').on("click", function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on("click", function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+38(099) 999-99-99');
