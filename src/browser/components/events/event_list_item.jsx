var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var classnames = require('classnames');
var Event;
import moment from 'moment';

Event = React.createClass({
    mixins: [FluxMixin],

    propTypes: {
        event: React.PropTypes.object.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
        userType: React.PropTypes.string.isRequired,
        organizationId: React.PropTypes.number.isRequired
    },

    openEvent: function() {
        this.getFlux().actions.Event.openEvent({
            event: this.props.event,
            organizationId: this.props.organizationId
        });
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

        var liClasses = classnames({
            'event-list-item': true,
            'selected': this.props.isSelected
        });

        return (
            <li onClick={this.openEvent} className={liClasses}>
                <div className='event-headers'>
                    <h2 className='event'>{event.name}</h2>
                    <span className='icon icon-clock-start' />
                    <h3 className='date'>{moment(event.date).format('MMMM Do h:mm A')}</h3>
                </div>
            </li>
        );
    }
});

module.exports = Event;
