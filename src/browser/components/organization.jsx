var React = require('react');
var Fluxxor = require('fluxxor');
var EventList = require('./events/event_list.jsx');
var EventView = require('./events/event_view.jsx');
var Organization;

Organization = React.createClass({
    render: function() {
        return (
            <div className="pure-g">
                <EventList
                    events={this.props.events}
                    selectedEvent={this.props.selectedEvent}
                    userType={this.props.userType}
                />

                <EventView
                    event={this.props.selectedEvent}
                    rides={this.props.rides}
                    members={this.props.members}
                />
            </div>
        );
    }
});

module.exports = Organization;
