var React = require('react');
var Fluxxor = require('fluxxor');
var Events = require('./events.jsx');
var Rides = require('./rides.jsx');
var Organization;

Organization = React.createClass({
    render: function() {
        return (
            <div className="pure-g">
                <Events events={this.props.events} selectedEvent={this.props.selectedEvent} />
                <Rides rides={this.props.rides} />
            </div>
        );
    }
});

module.exports = Organization;
