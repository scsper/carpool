var React = require('react');
var Fluxxor = require('fluxxor');
var Ride = require('./ride.jsx');
var Rides;

Rides = React.createClass({
    render: function() {
        var rideComponents = [];

        if (this.props.rides.length) {
            this.props.rides.forEach(function(ride) {
                rideComponents.push(<Ride key={ride.driver} ride={ride} />);
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
