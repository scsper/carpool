var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Passengers = require('../passengers.jsx');
var Ride;

import moment from 'moment';

Ride = React.createClass({
    mixins: [FluxMixin],

    propTypes: {
        ride: React.PropTypes.object.isRequired,
        passengers: React.PropTypes.array.isRequired
    },

    getInitialState() {
        return {
            isActive: false
        };
    },

    getAvailableSpots() {
        let ride = this.props.ride;

        return ride.totalSpots - ride.passengers.length;
    },

    toggleActive() {
        this.setState({
            isActive: !this.state.isActive
        });
    },

    addMembersToRide(memberIds) {
        this.getFlux().actions.Ride.addMembersToRide({
            memberIds: memberIds,
            rideId: this.props.ride.id,
            eventId: this.props.ride.eventId
        });
    },

    removeMembersFromRide(memberIds) {
        this.getFlux().actions.Ride.removeMembersFromRide({
            memberIds: memberIds,
            rideId: this.props.ride.id,
            eventId: this.props.ride.eventId
        });
    },

    render() {
        let ride = this.props.ride;
        let availableSpots = this.getAvailableSpots();
        let passengerComponent = this.state.isActive ? <Passengers
            passengers={this.props.passengers}
            availableSpots={availableSpots}
            memberList={this.props.memberList}
            addMembersToRide={this.addMembersToRide}
            removeMembersFromRide={this.removeMembersFromRide}
        /> : null;

        return (
            <li onClick={this.toggleActive} className='ride-list-item'>
                <span className='icon icon-avatar ride-icon' />
                <div className='driver-summary'>
                    <h2 className='ride-driver'>{ride.driverName}</h2>
                    <h3 className='ride-spots'>{availableSpots} available</h3>
                </div>
                <p className='ride-date'>Leaving at {moment(ride.leaveTime).format('MMMM Do h:mm A')}</p>
                <p className='ride-date'>Returning at {moment(ride.returnTime).format('MMMM Do h:mm A')}</p>

                {passengerComponent}
            </li>

        );
    }
});

module.exports = Ride;
