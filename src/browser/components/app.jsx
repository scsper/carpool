var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Organization = require('./organization.jsx');
var Navigation = require('./navigation.jsx');
var GenericForm = require('./form.jsx');
var App;

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore', 'RideStore', 'EventStore')],

    getInitialState: function() {
        // for some reason, I have to return an empty object (because of fluxxor)
        return {};
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();
        var rides = [];
        var eventData =  flux.store('EventStore').get();
        var rideStore = flux.store('RideStore');
        var selectedEvent = flux.store('EventStore').getSelectedEvent();

        if (selectedEvent) {
            selectedEvent.event.rideIds.forEach(function(rideId) {
                rides.push(rideStore.getById(rideId));
            });
        }

        return {
            orgData: flux.store('OrganizationStore').get(),
            rides: rides,
            eventData: eventData,
            selectedEvent: selectedEvent
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
