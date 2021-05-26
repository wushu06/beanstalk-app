define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'domReady!'
], function($, keyboardHandler) {
    'use strict';

    if ($('body').hasClass('checkout-cart-index')) {
        if ($('#co-shipping-method-form .fieldset.rates').length > 0 && $('#co-shipping-method-form .fieldset.rates :checked').length === 0) {
            $('#block-shipping').on('collapsiblecreate', function() {
                $('#block-shipping').collapsible('forceActivate');
            });
        }
    }

    // $('.cart-summary').mage('sticky', {
    //     container: '#maincontent'
    // });

    $('.panel.header > .header.links').clone().appendTo('#store\\.links');

    //
    // Show 'Added to Bag' message in minicart after successful addToCart
    //
    $(document).on('ajax:addToCart', function () {
        $('.js-cart-added').show();
    });

    keyboardHandler.apply();
});
