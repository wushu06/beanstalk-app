require(['jquery'], function ($) {
    'use strict';
    $(document).on('click','.fotorama__arr',function(){
        var index = $('.fotorama__nav--dots .fotorama__active').index();
        var current = $('#countCurrent');
        current.text(index);
    });
});
