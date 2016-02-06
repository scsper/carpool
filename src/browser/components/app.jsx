var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Organization = require('./organization.jsx');
var MemberList = require('./member_list.jsx');
var Navigation = require('./navigation.jsx');
var App;

import AppBar from 'material-ui/lib/app-bar';

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore', 'EventStore', 'UserStore')],

    getInitialState() {
        // for some reason, I have to return an empty object (because of fluxxor)
        return {};
    },

    getStateFromFlux() {
        let flux = this.getFlux();
        let eventStore = flux.store('EventStore');
        let events =  eventStore.getEvents();
        let orgs = flux.store('OrganizationStore').getAll();
        let user = flux.store('UserStore').get();
        let members = eventStore.getMembers();
        let selectedEvent = eventStore.getSelectedEvent();
        let memberList = [];
        let rides;

        if (selectedEvent) {
            memberList = eventStore.getMembersWhoNeedRides(selectedEvent.id);

            rides = eventStore.getRidesForEvent(selectedEvent.id);
        }

        return {
            orgs: orgs,
            rides: rides,
            events: events,
            user: user,
            selectedEvent: selectedEvent,
            members: members,
            memberList: memberList
        };
    },

    render() {
        // TODO remove the hardcoded org id
        return (
            <div>

                <AppBar />

                <Navigation name={this.state.user.name}  type={this.state.user.type} />

                <Organization
                    onClick={this.onClick}
                    orgs={this.state.orgs}
                    rides={this.state.rides}
                    events={this.state.events}
                    selectedEvent={this.state.selectedEvent}
                    userType={this.state.user.type}
                    members={this.state.members}
                    memberList={this.state.memberList}
                    organizationId={this.state.orgs[0].id}
                />
            </div>
        );
    }
});

module.exports = App;
