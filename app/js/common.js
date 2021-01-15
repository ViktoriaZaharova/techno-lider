$('.main-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.products-slider').slick({
    slidesToShow: 4,
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    $('.products-slider').slick('setPosition');
});

