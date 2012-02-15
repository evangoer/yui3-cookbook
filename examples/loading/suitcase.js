YUI.add('suitcase', function (Y) {
    Y.Suitcase = {
        get: function (name) {
            return localStorage.getItem(name);
        },
        set: function (name, value) {
            localStorage.setItem(name, value);
        }
    };
}, '0.0.1');