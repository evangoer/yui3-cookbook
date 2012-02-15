// WARNING: Config intentionally incomplete/broken
var YUI_config = {
    groups: {
        'local-modules': {
            base: '/js/BOGUS_PATH',
            modules: {
                'reptiles-core': {
                    path: 'reptiles-core/reptiles-core.js',
                    requires: ['node', 'reptiles-stomp', 'reptiles-fiery-breath'],
                    skinnable: true
                },
                'reptiles-fiery-breath': {
                    path: 'reptiles-fiery-breath/reptiles-fiery-breath.js'
                },
                'samurai': {
                    path: 'samurai/samurai.js'
                }
            }
        }
    }
};