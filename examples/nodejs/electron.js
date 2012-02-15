YUI.add('electron', function (Y) {
    var REST_ENERGY = 511.00;

    Y.Electron = Y.Base.create('electron', Y.Base, [], {
        initializer: function () {
            Y.log("SMASH! Here's your electron!");
        },
        getSpeed: function () {
            var e_ratio = REST_ENERGY / this.get('energy');
            return Math.sqrt(1 - e_ratio * e_ratio);
        }
    }, {
        ATTRS: {
            charge: {
                value: -1,
                readOnly: true
            },
            energy: {
                value: REST_ENERGY, 
                validator: function (en) {
                    return (en >= REST_ENERGY);
                }
            }
        }
    });
}, '1.0', { requires: ['base-build'] });