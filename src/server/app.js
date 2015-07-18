var express = require('express');
var app = express();
var path = require('path');
var models = require('./models');

app.set('views', 'src/server/views/');
app.set('view engine', 'jade');

app.use(express.static(path.resolve(__dirname, '../../public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/hello', function(req, res) {
    models.user.findOrCreate({
        where: {
            name: 'Scott'
        }
    }).then(function(user) {
        console.log(user[0].dataValues.name);
    }).error(function(error) {
        console.log(error);
    });
    res.send('hello');
});

module.exports = app;
