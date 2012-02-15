var Y = require('yui/yql');

Y.YQL('select * from arxiv.search where search_query="all:electron"', function (r) {
    Y.each(r.query.results.entry, function (article, ix) {
        console.log((ix + 1) + '. ' + article.title);
    });
});