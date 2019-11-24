$(function () {
    'use strict';

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').addClass('open');
        $('body').addClass('offcanvas-open');
    })
    $('[data-toggle="offcanvas-close"]').on('click', function () {
        $('.offcanvas-collapse').removeClass('open');
        $('body').removeClass('offcanvas-open');

    })
})