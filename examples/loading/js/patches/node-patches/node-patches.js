YUI.add('node-patches', function (Y) {
    Y.Node.prototype.setContent = function (content) {
        this.set('innerHTML', content);
    }
});