var Fluxxor = require('fluxxor');

var OrganizationStore = require('../stores/organization.js');
var RideStore = require('../stores/ride.js');
var EventStore = require('../stores/event.js');

var OrganizationActions = require('../actions/organization.js');
var EventActions = require('../actions/event.js');

module.exports = (function() {
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

    return flux;
})();
