var Y     = require('yui').use('handlebars', 'yql'),
    http  = require('http'),
    parse = require('url').parse;

var templateSrc = '<!doctype html>' 
    + '<title>Today\'s Sunrise/Sunset for {{loc.city}}, {{loc.region}}</title>'
    + '<h1>Today\'s Sunrise/Sunset for {{loc.city}}, {{loc.region}}</h1>'
    + '<ul><li>Sunrise: {{astro.sunrise}}</li><li>Sunset: {{astro.sunset}}</li></ul>';
    
var template = Y.Handlebars.compile(templateSrc);

http.createServer(function (req, res) {
    var query = parse(req.url, true).query,
        location = (query && query.location) || '94086';
    
    Y.YQL('select * from weather.forecast where location=' + location, function (r) {
        var channel = r.query.results.channel;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(template({ loc: channel.location, astro: channel.astronomy }));
        res.end();
    });
}).listen(8001);