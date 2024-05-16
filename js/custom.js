$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $("header").addClass('header-top');
    }
    else {
        $("header").removeClass('header-top');
    }
});

$(window).on('load', function(){
    $('.loader-main').delay('2000').fadeOut('fast');
})

$(document).ready(function(){

    $(document).ready(function () {
        $('#toggle, .close').click(function () {
            $('#mobile-list').toggle();
        });
    });

    new WOW().init();
})