var YUI = require('yui').YUI;

YUI().use('substitute', function (Y) {
    Y.log(Y.substitute('Hi! You are using YUI {version}.', YUI)); 
});