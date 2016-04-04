var React = require('react');
var Fluxxor = require('fluxxor');
var EventList = require('./events/event_list.jsx');
var EventView = require('./events/event_view.jsx');
var Organization;

Organization = React.createClass({
    render() {
        return (
            <div>
                {this.props.selectedEvent ? <EventView
                    event={this.props.selectedEvent}
                    rides={this.props.rides}
                    members={this.props.members}
                    memberList={this.props.memberList}
                /> : <EventList
                    events={this.props.events}
                    selectedEvent={this.props.selectedEvent}
                    userType={this.props.userType}
                    organizationId={this.props.organizationId}
                />}
            </div>
        );
    }
});

module.exports = Organization;
