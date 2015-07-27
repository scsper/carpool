var React = require('react');
var Fluxxor = require('fluxxor');
var Passengers = require('./passengers.jsx');
var Ride;

Ride = React.createClass({
    getInitialState() {
        return {
            isActive: false
        };
    },

    getAvailableSpots() {
        var ride = this.props.ride;

        return ride.totalSpots - ride.passengers.length;
    },

    toggleActive() {
        this.setState({
            isActive: !this.state.isActive
        });
    },

    render: function() {
        var passengerComponent = this.state.isActive ? <Passengers /> : null;

        return (
            <li onClick={this.toggleActive} className='ride-list-item'>
                <img className='ride-image' src="assets/person.jpg"/>
                <h2 className='ride-driver'>{this.props.ride.driver}</h2>
                <h3 className='ride-spots'>{this.getAvailableSpots()} available</h3>
                <p className='ride-date'>Leaving at {this.props.ride.leaveTime} on {this.props.ride.leaveDate}</p>
                <p className='ride-date'>Returning at {this.props.ride.returnTime} on {this.props.ride.returnDate}</p>

                {passengerComponent}
            </li>

        );
    }
});

module.exports = Ride;
