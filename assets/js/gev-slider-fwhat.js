jQuery(function ($) {
	$('.gev-slider-fwhat').slick({
        slidesToShow: 3,
        dots: true,
        infinite: false,
        arrows: true,
        nextArrow: '<div class="gev-custom-arrow gev-arrow-next"><i class="fas fa-chevron-right"></i></div>',
        prevArrow: '<div class="gev-custom-arrow gev-arrow-prev"><i class="fas fa-chevron-left"></i></div>',
        autoplay: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
});
