'use strict';

/**
 * Returns whether value is defined.
 *
 * @param {*} val Variable to test
 * @return {boolean}
 */
function isDefined(val) {
    return typeof val !== 'undefined';
}

/**
 * Main export function. Returns a  show scroll instance.
 *
 * @param {object} [windowObject] Window object override
 * @return {object}
 */
module.exports = function(windowObject) {
    return {
        name: 'ShowScroll',
        elements: [],

        /**
         * Collect all the elements on the page to be animated at some point
         * As well as bind the scroll event
         */
        init: function initialize() {
            this.elements = document.querySelectorAll('.animate') || [];
            document.body.onscroll = this.checkAnimations();
        },

        /**
         * Check the elements to see if an animation class needs to be applied
         */
        checkAnimations: function checkAnimations() {
            if (this.elements.length !== 0) {
                for (var i = this.elements.length - 1; i >= 0; i--) {
                    console.log(this.elements[i]);
                };
            } else {
                console.log('there are no elements to animate');
            }
        }
    };
};
