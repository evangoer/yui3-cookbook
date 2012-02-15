YUI.add('reptiles-core', function (Y) {
    var reptiles = Y.namespace('Reptiles');
    
    reptiles.traits = [
        'dark eyes',
        'shiny teeth'
    ];
    
    reptiles.info = function (node) {
        var out = '', i;
        for (i = 0; i < reptiles.traits.length; i += 1) {
            out += '<li>' + reptiles.traits[i] + '</li>';
        };
        out += '<li>' + reptiles.breathe() + '</li>';
        out += '<li>' + reptiles.stomp() + '</li>';
        node.append('<ul class="reptile">' + out + '</ul>');
    };
}, '0.0.1', {requires: ['node', 'reptiles-stomp', 'reptiles-fiery-breath']});