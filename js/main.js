$(document).ready(function () {

    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500
    });

    $('.price-item').click((e) => {
        let currentElement = $(e.target);
        $('.product-price').hide();
        let id = currentElement.data('id');
        $('#' + id).css('display', 'flex');
        $('.price-item').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .product-price').show('refresh');
    });


    $('#burger').click(() => {
        $('#burger-menu').css('display', 'flex');
    });

    $('#burger-close, #burger-menu').click((e) => {
        if (e.target.id === 'burger-menu' || e.target.id === 'burger-close-svg') {
            $('#burger-menu').hide();
        }
    });

    new WOW().init();

});
