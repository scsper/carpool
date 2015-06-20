var React = require('react');
var Fluxxor = require('fluxxor');
var Ride = require('./ride.jsx');
var Rides;

Rides = React.createClass({
    render: function() {
        var rideComponents = [];

        this.props.rides.forEach(function(ride) {
            rideComponents.push(<Ride key={ride.driver} ride={ride} />);
        });

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
