var express = require('express');
var app = express();
var path = require('path');

app.set('views', 'src/server/views/');
app.set('view engine', 'jade');

app.use(express.static(path.resolve(__dirname, '../../public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/hello', function(req, res) {
    res.send('hello');
});

module.exports = app;
