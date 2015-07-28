var React = require('react');
var Fluxxor = require('fluxxor');
var Rides = require('./rides.jsx');
var Map = require('./map.jsx');
var EventView;

EventView = React.createClass({
    propTypes: {
        event: React.PropTypes.object.isRequired,
        rides: React.PropTypes.array.isRequired,
        members: React.PropTypes.array.isRequired
    },

    displayEvent() {
        let event = this.props.event;

        if (event) {
            return (
                <div>
                    <h1 className='event-view-name'>{this.props.event.name}</h1>
                    <Rides rides={this.props.rides} members={this.props.members} memberList={this.props.memberList} />
                </div>
            );
        } else {
            return <div>Please select an event.</div>;
        }
    },

    render() {
        return (
            <div className='pure-u-1 pure-u-lg-2-3'>
                {this.displayEvent()}
            </div>
        );
    }
});

module.exports = EventView;
