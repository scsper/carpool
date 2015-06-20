var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Event;
var cx = React.addons.classSet;

Event = React.createClass({
    mixins: [FluxMixin],

    selectEvent: function() {
        this.getFlux().actions.Event.selectEvent(this.props.event);
    },

    render: function() {
        var event = this.props.event;

        var liClasses = cx({
            'event-list-item': true,
            'selected': this.props.isSelected
        });

        return (
            <li onClick={this.selectEvent} className={liClasses}>
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
