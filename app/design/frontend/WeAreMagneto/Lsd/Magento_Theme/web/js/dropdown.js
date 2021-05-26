define([
    'jquery',
    'matchMedia'
], function ($, mediaCheck) {
    'use strict';

    $('.navigation .level0 > .main-menu__link').on('click', function () {
        var li = $(this).parent();
        var a = $(this);
        var directToPage;

        if (! li.hasClass('main-menu__item--parent')) {
            return true;
        }

        mediaCheck({
            media: '(min-width: 768px)',
            entry: function () {
                $('.navigation .level0 > .main-menu__link').each(function () {
                    if ($(this) == a) {
                        return;
                    }

                    $(this).parent().removeClass('active');
                });


                var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

                if (! supportsTouch) {
                    directToPage = true;

                    return;
                }

                li.toggleClass('active');

                directToPage = false;
            },
            exit: function () {
                li.toggleClass('active');

                directToPage = false;
            }
        });

        if (directToPage) {
            return true;
        }

        return false;
    });
});
