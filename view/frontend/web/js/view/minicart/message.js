define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (Component, customerData) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Dolphin_FreeShippingMessage/minicart/message'
        },

        initialize: function () {
            this._super();
            this.cart = customerData.get('cart');
        },

        getMessage: function() {
            if (!this.cart() || !this.cart().free_shipping_message) {
                return '';
            }
            return this.cart().free_shipping_message.message;
        },

        getBackGroundColor: function() {
            if (!this.cart() || !this.cart().free_shipping_message) {
                return '';
            }
            return this.cart().free_shipping_message.background_color;
        },

        isVisible: function() {
            return this.cart() && 
                   this.cart().free_shipping_message && 
                   this.cart().free_shipping_message.message;
        }
    });
});