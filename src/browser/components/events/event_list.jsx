var React = require('react');
var Fluxxor = require('fluxxor');
var EventListItem = require('./event_list_item.jsx');
var EventList;

EventList = React.createClass({
    propTypes: {
        userType: React.PropTypes.string.isRequired,
        selectedEvent: React.PropTypes.object,
        events: React.PropTypes.array.isRequired,
        organizationId: React.PropTypes.number.isRequired
    },

    render() {
        var eventComponents = [];

        this.props.events.forEach(function(event) {
            var isSelected = false;
            var selectedEvent = this.props.selectedEvent;

            if (selectedEvent) {
                if (selectedEvent.name === event.name) {
                    isSelected = true;
                }
            }

            eventComponents.push(<EventListItem
                key={event.name}
                event={event}
                isSelected={isSelected}
                userType={this.props.userType}
                organizationId={this.props.organizationId}
            />);
        }, this);

        return (
            <ul className='event-list'>
                {eventComponents}
            </ul>
        );
    }
});

module.exports = EventList;
