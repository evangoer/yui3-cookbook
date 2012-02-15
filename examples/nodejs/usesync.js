var os  = require('os'),
    YUI = require('yui').YUI,
    Y   = YUI({ useSync: true }).use('substitute');

Y.Array.each(os.cpus(), function (cpu) {
    Y.log(Y.substitute('CPU: {model} @ {speed} MHz', cpu));
});