YUI.add('suitcase-legacy', function (Y) {
    Y.Suitcase = {
        get: function (name) {
            return Y.Cookie.get(name);
        },
        set: function (name, value) {
            Y.Cookie.set(name, value);
        }
    };
}, '0.0.1', { requires: ['suitcase', 'cookie'] });