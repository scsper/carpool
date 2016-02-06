var React = require('react');
var Fluxxor = require('fluxxor');
var Rides = require('./rides.jsx');
var Map = require('./map.jsx');
var EventView;

import moment from 'moment';

EventView = React.createClass({
    propTypes: {
        event: React.PropTypes.object,
        rides: React.PropTypes.array.isRequired,
        members: React.PropTypes.object.isRequired,
        memberList: React.PropTypes.array.isRequired
    },

    displayEvent() {
        let event = this.props.event;

        if (event) {
            return (
                <div className='event-view-container'>
                    <h1 className='event-view-name'>{event.name}</h1>
                    <div>
                        <span className='icon icon-location' />
                        <h2 className='event-view-address'>{event.address}</h2>
                    </div>
                    <div>
                        <span className='icon icon-calendar' />
                        <h2 className='event-view-date'>{moment(event.date).format('MMMM Do h:mm A')}</h2>
                    </div>
                    <h3 className='event-view-description'>{event.description}</h3>

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
