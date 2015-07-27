var React = require('react');
var Fluxxor = require('fluxxor');
var Ride = require('./ride.jsx');
var Rides;

Rides = React.createClass({
    propTypes: {
        members: React.PropTypes.object.isRequired,
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
                />);
            });
        } else {
            rideComponents.push(<li>Please select an event.</li>);
        }

        return (
            <div className="pure-u-1-2">
                <ul>
                    {rideComponents}
                </ul>
            </div>
        );
    }
});

module.exports = Rides;
