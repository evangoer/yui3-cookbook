YUI.add('electron', function (Y) {
    var REST_ENERGY = 511.00;
    
    Y.Electron = Y.Base.create('electron', Y.Widget, [], {
        destructor: function () { 
            this.get('contentBox').all('p').remove(true);
        },
        getSpeed: function () {
            var e_ratio = REST_ENERGY / this.get('energy');
            return Math.sqrt(1 - e_ratio * e_ratio);
        },
        boostEnergy: function () {
            this.set('energy', 1.1 * this.get('energy'));
        },
        renderUI: function () {
            var charge = this.get('strings').charge;
            this.get('contentBox')
                .append('<p class="ch">' + charge + ': ' + this.get('charge') + '</p>')
                .append('<p class="en">')
                .append('<p class="sp">');
        },
        bindUI: function () {
            this.get('contentBox').on('click', this.boostEnergy, this);            
            this.after('energyChange', this.syncUI, this);
        },
        syncUI: function () {
            var s = this.get('strings');
            var energyStr = s.energy + ': ' + this.get('energy').toPrecision(5) + ' MeV';
            var speedStr  = s.speed + ': ' + this.getSpeed().toPrecision(5) + ' c';
            this.get('contentBox').one('.en').setContent(energyStr);
            this.get('contentBox').one('.sp').setContent(speedStr);
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
            },
            strings: {
                valueFn: function () { 
                    return Y.Intl.get('electron'); 
                }
            }
        }
    });
}, '1.1_intl', {requires: ['base-build', 'widget', 'intl', 'electron-css']});