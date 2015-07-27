var React = require('react');
var Fluxxor = require('fluxxor');
var Passenger = require('./passenger.jsx');
var Passengers;

Passengers = React.createClass({
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

    render: function() {
        return (
            <ul>
                {this.getPassengerComponents()}
            </ul>
        );
    }
});

module.exports = Passengers;
