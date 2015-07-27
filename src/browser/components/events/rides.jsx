var React = require('react');
var Fluxxor = require('fluxxor');
var Ride = require('./ride.jsx');
var Rides;

Rides = React.createClass({
    propTypes: {
        members: React.PropTypes.object.isRequired,
        memberList: React.PropTypes.array.isRequired,
        rides: React.PropTypes.array.isRequired
    },

    getPassengersForRide(ride) {
        let passengers = [];

        ride.passengers.forEach(passengerId => {
            passengers.push(this.props.members[passengerId]);
        }, this);

        return passengers;
    },

    render() {
        let rideComponents = [];
        let rides = this.props.rides;

        if (rides.length) {
            rides.forEach(ride => {
                rideComponents.push(<Ride
                    key={ride.driver}
                    ride={ride}
                    passengers={this.getPassengersForRide(ride)}
                    memberList={this.props.memberList}
                />);
            });
        } else {
            rideComponents.push(<li>There are no drivers for this event.</li>);
        }

        return (
            <div>
                <h2>Rides</h2>
                <ul className='ride-list'>
                    {rideComponents}
                </ul>
            </div>
        );
    }
});

module.exports = Rides;
