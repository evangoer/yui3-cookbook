/** 
 * Provides toy classes and methods used to show how unit testing 
 * works in YUI Test.
 * @module example
 * @submodule example-async
 * @for ColorChange
 */

/**
 * Provides simple timed style changes that you can use to learn how
 * to write asynchronous tests.  
 * @class ColorChange
 */
Example.ColorChange = {

    /**
     * After the specified timeout, changes the body of the document 
     * to "rgb(255,0,0)" and fires an "example:red" event. This is a toy 
     * function used to illustrate asynchronous testing. 
     * @method changeToRed
     * @param {Number} timeout The number of ms to wait before changing 
     *                         the body to red.
     */
    changeToRed: function (timeout) {
        setTimeout(function () {
            Y.one('body').addClass('foo');

            /**
             * Indicates that the background has changed to red. This is
             * the event to listen for when running an asynchronous test
             * with wait() and resume().
             * @event example:red
             * @type Event:Custom
             */
            Y.fire('example:red');
        }, timeout)
    }
};