var Fluxxor = require('fluxxor');

var OrganizationStore = require('../stores/organization.js');
var EventStore = require('../stores/event.js');
var MemberStore = require('../stores/member.js');
var UserStore = require('../stores/user.js');

var OrganizationActions = require('../actions/organization.js');
var EventActions = require('../actions/event.js');
var RideActions = require('../actions/ride.js');

module.exports = (function() {
    var stores = {
        OrganizationStore: new OrganizationStore(window.organizations),
        EventStore: new EventStore(window.events),
        UserStore: new UserStore(),
        MemberStore: new MemberStore(window.members)
    };

    var actions = {
        Organization: OrganizationActions,
        Event: EventActions,
        Ride: RideActions
    };

    var flux = new Fluxxor.Flux(stores, actions);

    return flux;
})();
