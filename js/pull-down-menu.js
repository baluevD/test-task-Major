$(function () {
    'use strict';

    $('[data-toggle="pull-down-menu"]').on('click', function () {
        $('.pull-down-menu-collapse').addClass('open');
        $('body').addClass('pull-down-menu-open');
        $('<div class="overlay">&nbsp;</div>').prependTo($('body'));
        $(".overlay").show(300);
    })
    $('[data-toggle="pull-down-menu-close"]').on('click', function () {
        $('.pull-down-menu-collapse').removeClass('open');
        $('body').removeClass('pull-down-menu-open');
        $(".overlay").hide(300);
        $('.overlay').remove();
    })
})