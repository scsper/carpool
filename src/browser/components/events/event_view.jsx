var React = require('react');
var Fluxxor = require('fluxxor');
var Rides = require('./rides.jsx');
var EventView;

EventView = React.createClass({
    propTypes: {
        event: React.PropTypes.object.isRequired,
        rides: React.PropTypes.array.isRequired,
        members: React.PropTypes.array.isRequired
    },

    render() {
        return (
            <Rides rides={this.props.rides} members={this.props.members} />
        );
    }
});

module.exports = EventView;
