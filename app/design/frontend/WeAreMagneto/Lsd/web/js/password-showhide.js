define([
    'jquery',
], function($) {
    'use strict';

    /**
     * Show/hide password on sibling input elements by switching type
     * between 'text' and 'password'
     */
    return function(config, node) {
        var $node = $(node);
        var $input = $(node).siblings('input[type="text"],input[type="password"]');
        var $otherInputs = $(config.otherInputsSelector || '');

        $node.on('click', function() {
            var type = $input.first().attr('type');
            var toggledType = type === 'password' ? 'text' : 'password';

            $input.attr('type', toggledType);
            $otherInputs.attr('type', toggledType);
        });
    }
});
