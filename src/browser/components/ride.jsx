var React = require('react');
var Fluxxor = require('fluxxor');
var Ride;

Ride = React.createClass({
    getAvailableSpots() {
        var ride = this.props.ride;

        return ride.totalSpots - ride.passengers.length;
    },

    render: function() {
        return (
            <li className='ride-list-item'>
                <img className='ride-image' src="assets/person.jpg"/>
                <h2 className='ride-driver'>{this.props.ride.driver}</h2>
                <h3 className='ride-spots'>{this.getAvailableSpots()} available</p>
                <p className='ride-date'>Leaving at {this.props.ride.leaveTime} on {this.props.ride.leaveDate}</p>
                <p className='ride-date'>Returning at {this.props.ride.returnTime} on {this.props.ride.returnDate}</p>
            </li>
        );
    }
});

module.exports = Ride;
