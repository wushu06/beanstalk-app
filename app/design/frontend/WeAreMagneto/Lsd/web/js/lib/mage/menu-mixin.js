define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    return function (data) {

        $.widget('mage.menu', data.menu, {

            _create: function () {
                $(this.element).data('ui-menu', this);
                this._super();
            },

            _toggleMobileMode: function () {
                var subMenus;

                $(this.element).off('mouseenter mouseleave');

                this._on({

                    /**
                     * @param {jQuery.Event} event
                     */
                    'click .ui-menu-item:has(a)': function (event) {
                        var target,
                            parent;

                        event.preventDefault();
                        parent = $(event.target).closest('.ui-menu-item');
                        target = $(event.target);

                        if (!parent.hasClass('level-top') || !parent.has('.ui-menu').length) {

                            if(target.attr('href')) {
                                window.location.href = target.attr('href');
                            }

                        }
                    },

                    /**
                     * @param {jQuery.Event} event
                     */
                    'click .ui-menu-item:has(.ui-state-active)': function (event) {
                        this.collapseAll(event, true);
                    }
                });

                subMenus = this.element.find('.level-top');
                $.each(subMenus, $.proxy(function (index, item) {
                    var category = $(item).find('> a span').not('.ui-menu-icon').text(),
                        categoryUrl = $(item).find('> a').attr('href'),
                        menu = $(item).find('> .ui-menu');

                    this.categoryLink = $('<a>')
                        .attr('href', categoryUrl)
                        .text($.mage.__('All ') + category);

                    this.categoryParent = $('<li>')
                        .addClass('ui-menu-item all-category')
                        .html(this.categoryLink);

                    if (menu.find('.all-category').length === 0) {
                        menu.prepend(this.categoryParent);
                    }

                }, this));
            }

        });

        data.menu = $.mage.menu;

        return data;
    };
});
