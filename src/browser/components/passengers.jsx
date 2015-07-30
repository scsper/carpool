var React = require('react');
var Fluxxor = require('fluxxor');
var Passenger = require('./passenger.jsx');
var MemberList = require('./member_list.jsx');
var Passengers;

Passengers = React.createClass({
    propTypes: {
        availableSpots: React.PropTypes.number.isRequired,
        memberList: React.PropTypes.array.isRequired,
        addMembersToRide: React.PropTypes.func.isRequired
    },

    getPassengerComponents() {
        let passengers = this.props.passengers;
        let components = [];

        if (passengers.length > 0) {
            this.props.passengers.forEach(passenger => {
                components.push(<Passenger key={passenger.id} passenger={passenger} />);
            });
        } else {
            components.push(<li key='no-passengers'>There are no passengers signed up for this ride.</li>);
        }

        return components;
    },

    getAddPassengerList() {
        if (this.props.availableSpots > 0) {
            return <MemberList addMembersToRide={this.props.addMembersToRide} members={this.props.memberList}/>;
        } else {
            return null;
        }
    },

    /**
     * We don't want to collapse the passenger we have expanded every time we click on the list.
     */
    handleClick(event) {
        event.stopPropagation();
    },

    render() {
        return (
            <ul onClick={this.handleClick} className='passenger-list'>
                {this.getPassengerComponents()}
                {this.getAddPassengerList()}
            </ul>
        );
    }
});

module.exports = Passengers;
