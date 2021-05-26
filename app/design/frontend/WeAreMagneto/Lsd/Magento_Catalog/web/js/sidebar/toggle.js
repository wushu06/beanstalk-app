/**
 * Toggle sidebar on category listing pages. Hide/show functionality
 * is implemented through Sass.
 *
 * @author Arnolds Kozlovskis <arnie@elementarydigital.co.uk>
 * @copyright WeAreMagneto - 2020
 */
define([
    'jquery'
], function ($) {
    'use strict';

    return function(config, element) {
        $(element).on('click', function (e) {
            e.preventDefault();

            $('body').toggleClass('show-filter');
        });
    }
});
