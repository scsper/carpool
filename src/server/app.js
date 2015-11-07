// es6 require hook
require('babel/register');
require('es6-promise').polyfill();

var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var routes = require('./routes');
var bodyParser = require('body-parser');

app.set('views', 'src/server/views/');
app.set('view engine', 'jade');

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../../public')));

app.use(morgan('combined'));

app.get('/', routes.launch);
app.get('/api/organizations', routes.getOrganizations);
app.get('/api/organizations/:id/members', routes.getMembers);
app.get('/api/organizations/:organizationId/events/:eventId/rides', routes.getRides);
app.get('/api/organizations/:organizationId/events', routes.getEvents);
app.get('/organizations/:organizationId/events/:eventId/rides/:id', routes.getRide);

app.post('/api/organizations/:organizationId/events/:eventId/rides/:rideId', routes.addPassengerToRide);

module.exports = app;
