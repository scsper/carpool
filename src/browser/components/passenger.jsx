var React = require('react');
var Fluxxor = require('fluxxor');
var Passenger = require('./passenger.jsx');

Passenger = React.createClass({
    render: function() {
        return (
            <li>
                {this.props.passenger.firstName + ' ' + this.props.passenger.lastName}
            </li>
        );
    }
});

module.exports = Passenger;
