var React = require('react');
var Fluxxor = require('fluxxor');
var Passenger = require('./passenger.jsx');
var Passengers;

Passengers = React.createClass({
    propTypes: {
        availableSpots: React.PropTypes.number.isRequired
    },

    getPassengerComponents() {
        let passengers = this.props.passengers;
        let components = [];

        if (passengers.length > 0) {
            this.props.passengers.forEach(passenger => {
                components.push(<Passenger passenger={passenger} />);
            });
        } else {
            components.push(<li>There are no passengers signed up for this ride.</li>);
        }

        return components;
    },

    getAddPassengerButton() {
        if (this.props.availableSpots > 0) {
            return <li><button className='pure-button'>Add Passengers</button></li>;
        } else {
            return null;
        }
    },

    render: function() {
        return (
            <ul>
                {this.getAddPassengerButton()}
                {this.getPassengerComponents()}
            </ul>
        );
    }
});

module.exports = Passengers;
