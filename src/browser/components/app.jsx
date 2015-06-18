var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var OrganizationStore = require('../stores/organization.js');
var Organization = require('./organization.jsx');
var App;

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore')],

    getInitialState: function() {
        // for some reason, I have to return an empty object.
        return {};
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();

        return flux.store('OrganizationStore').get();
    },

    onClick: function() {
        var actions = this.getFlux().actions;

        actions.create('hello world!');
    },

    render: function() {
        return (
            <Organization onClick={this.onClick} orgs={this.state.orgs} />
        );
    }
});

module.exports = App;
