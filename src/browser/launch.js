var React = require('react');
var Fluxxor = require('fluxxor');
var App = require('./components/app.jsx');

var OrganizationStore = require('./stores/organization.js');
var RideStore = require('./stores/ride.js');
var EventStore = require('./stores/event.js');

var OrganizationActions = require('./actions/organization.js');
var EventActions = require('./actions/event.js');

window.onload = function() {
    require('../browser/styles/app.css');

    var stores = {
        OrganizationStore: new OrganizationStore(),
        RideStore: new RideStore(),
        EventStore: new EventStore()
    };

    var actions = {
        Organization: OrganizationActions,
        Event: EventActions
    };

    var flux = new Fluxxor.Flux(stores, actions);

    React.render(React.createElement(App, {
        flux: flux
    }), document.getElementById('container'));
};
