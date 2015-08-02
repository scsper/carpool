var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Organization = require('./organization.jsx');
var MemberList = require('./member_list.jsx');
var Navigation = require('./navigation.jsx');
var EventForm = require('./event_form.jsx');
var App;

App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('OrganizationStore', 'RideStore', 'EventStore', 'UserStore', 'MemberStore')],

    getInitialState() {
        // for some reason, I have to return an empty object (because of fluxxor)
        return {};
    },

    getStateFromFlux() {
        let flux = this.getFlux();
        let rides = [];
        let events =  flux.store('EventStore').get();
        let orgData = flux.store('OrganizationStore').get();
        let user = flux.store('UserStore').get();
        let rideStore = flux.store('RideStore');
        let members = flux.store('MemberStore').get();
        let selectedEvent = flux.store('EventStore').getSelectedEvent();
        let memberList = [];

        if (selectedEvent) {
            memberList = flux.store('MemberStore').getMembersWhoNeedRides(selectedEvent.id);

            selectedEvent.rideIds.forEach(function(rideId) {
                rides.push(rideStore.getById(rideId));
            });
        }

        return {
            orgData: orgData,
            rides: rides,
            events: events,
            user: user,
            selectedEvent: selectedEvent,
            members: members,
            memberList: memberList
        };
    },

    render() {
        return (
            <div>
                <Navigation name={this.state.user.name}  type={this.state.user.type} />

                <Organization
                    onClick={this.onClick}
                    orgs={this.state.orgData.orgs}
                    rides={this.state.rides}
                    events={this.state.events}
                    selectedEvent={this.state.selectedEvent}
                    userType={this.state.user.type}
                    members={this.state.members}
                    memberList={this.state.memberList}
                />
            </div>
        );
    }
});

module.exports = App;
