var React = require('react');
var Fluxxor = require('fluxxor');
var Passenger = require('./passenger.jsx');

Passenger = React.createClass({
    propTypes: {
        removeMembersFromRide: React.PropTypes.func.isRequired,
        passenger: React.PropTypes.object.isRequired
    },

    onClick(event) {
        event.stopPropagation();

        this.props.removeMembersFromRide([this.props.passenger.id]);
    },

    render() {
        return (
            <li className='passenger-list-item'>
                <button className='icon icon-delete passenger-delete' onClick={this.onClick}></button>
                {this.props.passenger.name}
            </li>
        );
    }
});

module.exports = Passenger;
