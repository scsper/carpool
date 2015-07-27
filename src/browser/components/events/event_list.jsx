var React = require('react');
var Fluxxor = require('fluxxor');
var EventListItem = require('./event_list_item.jsx');
var EventList;

EventList = React.createClass({
    propTypes: {
        userType: React.PropTypes.string.isRequired,
        selectedEvent: React.PropTypes.object.isRequired,
        events: React.PropTypes.array.isRequired
    },

    render() {
        var eventComponents = [];

        this.props.events.forEach(function(event) {
            var isSelected = false;
            var selectedEvent = this.props.selectedEvent;

            if (selectedEvent) {
                if (selectedEvent.event.name === event.name) {
                    isSelected = true;
                }
            }

            eventComponents.push(<EventListItem
                key={event.name}
                event={event}
                isSelected={isSelected}
                userType={this.props.userType}
            />);
        }, this);

        return (
            <div className='pure-u-1 pure-u-lg-1-3'>
                <ul className='event-list'>
                    {eventComponents}
                </ul>
            </div>
        );
    }
});

module.exports = EventList;
