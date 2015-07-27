var React = require('react');
var Fluxxor = require('fluxxor');
var Event = require('./event.jsx');
var Events;

Events = React.createClass({
    propTypes: {
        userType: React.PropTypes.string.isRequired,
        selectedEvent: React.PropTypes.object.isRequired,
        events: React.PropTypes.array.isRequired
    },

    render: function() {
        var eventComponents = [];

        this.props.events.forEach(function(event) {
            var isSelected = false;
            var selectedEvent = this.props.selectedEvent;

            if (selectedEvent) {
                if (selectedEvent.event.name === event.name) {
                    isSelected = true;
                }
            }

            eventComponents.push(<Event
                key={event.name}
                event={event}
                isSelected={isSelected}
                userType={this.props.userType}
            />);
        }, this);

        return (
            <div className="pure-u-1-2">
                <ul>
                    {eventComponents}
                </ul>
            </div>
        );
    }
});

module.exports = Events;
