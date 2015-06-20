var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Organization = require('./organization.jsx');
var Navigation = require('./navigation.jsx');
var App;

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore', 'RideStore', 'EventStore')],

    getInitialState: function() {
        // for some reason, I have to return an empty object.
        return {};
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();
        var rides = [];
        var eventData =  flux.store('EventStore').get();
        var rideStore = flux.store('RideStore');

        // hardcoded for now because this is just a prototype
        eventData.events[0].rideIds.forEach(function(rideId) {
            rides.push(rideStore.getById(rideId));
        });

        return {
            orgData: flux.store('OrganizationStore').get(),
            rides: rides,
            eventData: flux.store('EventStore').get(),
            selectedEvent: flux.store('EventStore').getSelectedEvent()
        };
    },

    render: function() {
        return (
            <div>
                <Navigation />
                <Organization
                    onClick={this.onClick}
                    orgs={this.state.orgData.orgs}
                    rides={this.state.rides}
                    events={this.state.eventData.events}
                    selectedEvent={this.state.selectedEvent}
                />
            </div>
        );
    }
});

module.exports = App;
