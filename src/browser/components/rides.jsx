var React = require('react');
var Fluxxor = require('fluxxor');
var Ride = require('./ride.jsx');
var Rides;

Rides = React.createClass({
    propTypes: {
        members: React.PropTypes.object.isRequired,
        rides: React.PropTypes.array.isRequired
    },

    getPassengersForRide() {
        let passengers = [];

        this.props.rides.forEach(ride => {
            ride.passengers.forEach(passengerId => {
                passengers.push(this.props.members[passengerId]);
            }, this);
        }, this);

        return passengers;
    },

    render() {
        var rideComponents = [];

        if (this.props.rides.length) {
            this.props.rides.forEach(function(ride) {
                rideComponents.push(<Ride key={ride.driver} ride={ride} passengers={this.getPassengersForRide()} />);
            }, this);
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
