$(function () {
    'use strict';

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').addClass('open');
        $('body').addClass('offcanvas-open');
        $('<div class="overlay">&nbsp;</div>').prependTo($('body'));
        $(".overlay").show("300");
    })
    $('[data-toggle="offcanvas-close"]').on('click', function () {
        $('.offcanvas-collapse').removeClass('open');
        $('body').removeClass('offcanvas-open');
        $(".overlay").hide(300);
        $('.overlay').remove();
    })
})