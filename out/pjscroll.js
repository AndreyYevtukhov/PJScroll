/**
 * smooth scroll module
 * 
 * date: 20.11.2016
 * version: 0.1
 * author: a.yevtukhov@gmail.com
 */

var PJScroll = (function () {
    "use strict";

    /**
     * Body html element
     * needed, to get current document scroll position + make scrolling
     * 
     * @type {HTMLElement}
     */
    var body = document.body;

    /**
     * linear smooth scroll animation to element
     *
     * @param element
     */
    function scrollTo(element) {
        /**
         * configuration params
         *
         * @param duration - animation duration, in milliseconds
         * @param fps - frames per second | more -> animation will be smoother, but it costs of performance
         */
        var duration = 240,
            fps = 100;

        var offsetTop = element ? element.offsetTop - body.scrollTop : 0 - body.offsetTop,
            animation,
            start = Date.now(),
            frames = duration * fps / 1000,
            step = offsetTop / frames,
            now;

        animation = setInterval(function () {
            now = Date.now();

            if (now <= start + duration) {
                body.scrollTop += step;
            } else {
                body.scrollTop = element.offsetTop;
                clearInterval(animation);
            }
        }, 1000 / fps);
    }

    /**
     * PJScroll API
     */
    return {
        /**
         * linear scroll to given HTMLElement object
         * 
         * @example
         *  PJScroll.scrollTo(document.getElementByID("test");
         */
        scrollTo: scrollTo
    }
})();