/**
 * Close all active filters.
 *
 * @author Arnolds Kozlovskis <arnie@elementarydigital.co.uk>
 * @copyright WeAreMagneto - 2020
 */
define([
    'jquery'
], function ($) {
    'use strict';

    return function(config, element) {
        var titles = $('.filter-options .filter-options-item');

        $(element).on('click', function (e) {
            e.preventDefault();

            if (! titles.length) {
                return;
            }

            titles.each(function () {
                var item = $(this);
                var title = item.find('.filter-options-title');

                if (item.hasClass('active')) {
                    title.trigger('click');
                }
            });
        });
    }
});
