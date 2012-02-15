YUI.add('hello', function (Y) {

    function setNodeMessage(node, html) {
        node = Y.one(node);
        if (node) {
            node.setContent(html);
        }
    }

    Y.namespace('Hello').sayHello = function (node) {
        setNodeMessage(node, 'GREETINGS PROGRAMS');
    };

}, '0.0.1', {requires: ['node-base']});