var React = require('react');
var Fluxxor = require('fluxxor');
var Event;

Event = React.createClass({
    render: function() {
        var event = this.props.event;

        return (
            <li className='event-list-item'>
                <div className='event-headers'>
                    <h2 className='event'>{event.name}</h2>
                    <h3 className='date'>{event.date} at {event.time}</h3>
                </div>
                <p className='event-description'>{event.description}</p>
            </li>
        );
    }
});

module.exports = Event;
