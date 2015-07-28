var Fluxxor = require('fluxxor');

var OrganizationStore = require('../stores/organization.js');
var RideStore = require('../stores/ride.js');
var EventStore = require('../stores/event.js');
var MemberStore = require('../stores/member.js');
var UserStore = require('../stores/user.js');

var OrganizationActions = require('../actions/organization.js');
var EventActions = require('../actions/event.js');
var RideActions = require('../actions/ride.js');

module.exports = (function() {
    var stores = {
        OrganizationStore: new OrganizationStore(),
        RideStore: new RideStore(),
        EventStore: new EventStore(),
        UserStore: new UserStore(),
        MemberStore: new MemberStore()
    };

    var actions = {
        Organization: OrganizationActions,
        Event: EventActions,
        Ride: RideActions
    };

    var flux = new Fluxxor.Flux(stores, actions);

    return flux;
})();
