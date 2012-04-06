YUI.add('electron', function (Y) {
    var REST_ENERGY = 511.00;
    
    Y.Electron = Y.Base.create('electron', Y.Widget, [], {
        speed: function () {
            var e_ratio = REST_ENERGY / this.get('energy');
            return Math.sqrt(1 - e_ratio * e_ratio);
        },
        boostEnergy: function () {
            this.set('energy', 1.1 * this.get('energy'));
        },
        renderUI: function () {
            this.get('contentBox')
                .append('<p class="ch">Charge: ' + this.get('charge') + '</p>')
                .append('<p class="en">')
                .append('<p class="sp">');
        },
        bindUI: function () {
            this.get('contentBox').on('click', this.boostEnergy, this);            
            this.after('energyChange', this.syncUI, this);
        },
        syncUI: function () {
            var energyStr = 'Energy: ' + this.get('energy').toPrecision(5) + ' MeV';
            var speedStr  = 'Speed: ' + this.speed().toPrecision(5) + ' c';
            this.get('contentBox').one('.en').setHTML(energyStr);
            this.get('contentBox').one('.sp').setHTML(speedStr);
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
}, '1.1', { requires: ['base-build', 'widget'], skinnable: true });
