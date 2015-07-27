var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Organization = require('./organization.jsx');
var Navigation = require('./navigation.jsx');
var GenericForm = require('./form.jsx');
var App;

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore', 'RideStore', 'EventStore', 'UserStore', 'MemberStore')],

    getInitialState: function() {
        // for some reason, I have to return an empty object (because of fluxxor)
        return {};
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();
        var rides = [];
        var eventData =  flux.store('EventStore').get();
        var orgData = flux.store('OrganizationStore').get();
        var userData = flux.store('UserStore').get();
        var rideStore = flux.store('RideStore');
        var members = flux.store('MemberStore').get();
        var selectedEvent = flux.store('EventStore').getSelectedEvent();

        if (selectedEvent) {
            selectedEvent.event.rideIds.forEach(function(rideId) {
                rides.push(rideStore.getById(rideId));
            });
        }

        return {
            orgData: orgData,
            rides: rides,
            eventData: eventData,
            user: userData.user,
            selectedEvent: selectedEvent,
            members: members
        };
    },

    render: function() {
        return (
            <div>
                <Navigation name={this.state.user.firstName}  type={this.state.user.type} />

                <Organization
                    onClick={this.onClick}
                    orgs={this.state.orgData.orgs}
                    rides={this.state.rides}
                    events={this.state.eventData.events}
                    selectedEvent={this.state.selectedEvent}
                    userType={this.state.user.type}
                    members={this.state.members}
                />
            </div>
        );
    }
});

module.exports = App;
