// slider page
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

// mobile menu
$('.btn-burger').on("click", function () {
    $('.mobile-menu').fadeToggle();
});

$('.mobile-menu .btn-close').on("click", function () {
    $('.mobile-menu').fadeOut();
});

// mask phone
$('[name="phone"]').mask('+38(099) 999-99-99');

// dropdown menu
$('.btn-dropdown').on('click', function () {
   $(this).parents('.menu-catalog__item').toggleClass('active').find('.menu-catalog__dropdown').slideToggle();
});

$('.subcategory-button').on('click', function () {
   $(this).toggleClass('click').siblings('.subcategory-body').slideToggle();
});

// filter mobile
$('.btn-filter').on('click', function () {
    $('.sidebar').fadeToggle();
});

$('.sidebar .btn-close').on('click', function () {
    $('.sidebar').fadeOut();
});

// active links menu
$('.cabinet-menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location === link) {
        $(this).addClass('current');
    }
});

// cabinet menu mobile
$('.btn-menu-cabinet').on('click', function () {
   $(this).toggleClass('click').siblings('.cabinet-menu').slideToggle();
});


// модальные окна
$(function () {
    let overlay = $('.overlay');
    let open_modal = $('.open_modal');
    let close = $('.modal__close, .overlay');
    let modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// stars rating
$('.list-estimate li').on('click', function () {
    let onStar = parseInt($(this).data('value'), 10); // The star currently selected
    let stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
    }
});
