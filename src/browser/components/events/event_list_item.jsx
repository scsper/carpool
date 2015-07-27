var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Event;
var cx = React.addons.classSet;

Event = React.createClass({
    mixins: [FluxMixin],

    propTypes: {
        event: React.PropTypes.object.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
        userType: React.PropTypes.string.isRequired
    },

    selectEvent: function() {
        this.getFlux().actions.Event.selectEvent(this.props.event);
    },

    getButtonText() {
        switch (this.props.userType) {
            case 'admin':
                return 'Admin';
            case 'driver':
                return 'Drive';
            case 'passenger':
                return 'Ride';
            default:
                throw new Error('Invalid userType ' + this.props.userType + ' passed to Event component');
        }
    },

    render() {
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
                <button className='event-button pure-button'>{this.getButtonText()}</button>
            </li>
        );
    }
});

module.exports = Event;
