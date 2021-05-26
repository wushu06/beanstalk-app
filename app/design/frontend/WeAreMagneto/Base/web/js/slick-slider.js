define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    return function(config, node) {
        $(node).slick(config);
    }
});
