#!/usr/bin/env node

var YUI  = require('yui').YUI,
    Y = YUI({ 
        useSync: true,
        modules: {
            'electron': {
                fullpath: __dirname + '/electron.js',
                requires: ['base']
            }
        }
    }).use('electron');
    
var argv = process.argv.slice(2),
    arg,
    help = 'cyclotron.js -- Because outside CERN, we make our own fun.\n'
         + '  Usage: cyclotron.js [--energy <energy in MeV>]\n\n',
    electron,
    opts = {};

while(arg = argv.shift()) {
    switch(arg) {
        case '--energy':
        case '-e':
            opts.energy = argv.shift();
            break;
            
        default:
            Y.log('Unrecognized parameter: ' + arg, 'error');
            process.stdout.write(help);
            process.exit(1);
    }
}

electron = new Y.Electron(opts);
Y.log('Charge: ' + electron.get('charge'));
Y.log('Energy: ' + electron.get('energy') + ' MeV');
Y.log(' Speed: ' + electron.getSpeed().toPrecision(5) + ' c');