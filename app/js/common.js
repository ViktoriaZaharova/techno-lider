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

$('.mobile-menu .btn-close').on("click", function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+38(099) 999-99-99');

$('.btn-dropdown').on('click', function () {
   $(this).parents('.menu-catalog__item').toggleClass('active').find('.menu-catalog__dropdown').slideToggle();
});

$('.subcategory-button').on('click', function () {
   $(this).toggleClass('click').siblings('.subcategory-body').slideToggle();
});

$('.btn-filter').on('click', function () {
   $('.sidebar').fadeToggle();
});

$('.sidebar .btn-close').on('click', function () {
    $('.sidebar').fadeOut();
});