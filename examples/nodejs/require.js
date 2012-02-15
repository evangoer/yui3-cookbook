var os = require('os'),
    Y  = require('yui/substitute');

Y.Array.each(os.cpus(), function (cpu) {
    Y.log(Y.substitute('CPU: {model} @ {speed} MHz', cpu));
});