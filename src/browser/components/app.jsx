var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var OrganizationStore = require('../stores/organization.js');
var Organization = require('./organization.jsx');
var Navigation = require('./navigation.jsx');
var App;

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore', 'RideStore')],

    getInitialState: function() {
        // for some reason, I have to return an empty object.
        return {};
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();

        return {
            orgData: flux.store('OrganizationStore').get(),
            rideData: flux.store('RideStore').get()
        };
    },

    onClick: function() {
        var actions = this.getFlux().actions;

        actions.create('hello world!');
    },

    render: function() {
        return (
            <div>
                <Navigation />
                <Organization onClick={this.onClick} orgs={this.state.orgData.orgs} rides={this.state.rideData.rides} />
            </div>
        );
    }
});

module.exports = App;
