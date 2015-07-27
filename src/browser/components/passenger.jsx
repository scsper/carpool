var React = require('react');
var Fluxxor = require('fluxxor');
var Passenger = require('./passenger.jsx');

Passenger = React.createClass({
    render: function() {
        return (
            <li>
                {this.props.passenger.name}
            </li>
        );
    }
});

module.exports = Passenger;
