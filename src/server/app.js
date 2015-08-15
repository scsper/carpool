// es6 require hook
require('babel/register');
require('es6-promise').polyfill();

var express = require('express');
var app = express();
var path = require('path');
var api = require('./api');
var morgan = require('morgan');
var organizationsQueries = require('./queries/organizations.js');

app.set('views', 'src/server/views/');
app.set('view engine', 'jade');

app.use(express.static(path.resolve(__dirname, '../../public')));

app.use(morgan('combined'));

app.get('/', function(req, res, next) {
    organizationsQueries.index().then(function(data) {
        res.render('index', {
            organizations: data
        });
    }).catch(next);
});

app.get('/hello', function(req, res, next) {
    res.json({test: 'test'});
});

app.use('/api', api);

module.exports = app;
