var React = require('react');
var Fluxxor = require('fluxxor');
var startsWith = require('lodash/string/startsWith');
var classnames = require('classnames');
var MemberList;

MemberList = React.createClass({
    propTypes: {
        members: React.PropTypes.array.isRequired
    },

    getInitialState() {
        return {
            membersToDisplay: this.filterMemberList('')
        };
    },

    onChange(event) {
        let filterString = event.target.value;

        this.setState({
            membersToDisplay: this.filterMemberList(filterString)
        })
    },

    /**
     * Returns an object that has a member's name as both key and value.
     * The members that appear in the object are the ones that passed the filter criteria.
     */
    filterMemberList(filterString) {
        let memberObject = {};

        this.props.members.filter(member => {
            return startsWith(member.name.toLowerCase(), filterString.toLowerCase());
        }).forEach(member => {
            memberObject[member.name] = member.name;
        });

        return memberObject;
    },

    /**
     * We use CSS to hide the inputs that we don't want to display because we don't actually want to
     * remove them from the DOM.  The user may have checked a name and be searching for another one.
     */
    displayMemberComponents() {
        let memberComponents = [];

        this.props.members.forEach(member => {
            // if the member's name is not in the "membersToDisplay" object, then we hide it
            let liClasses = classnames({
                'hidden': !this.state.membersToDisplay[member.name],
                'member-list-item': true
            });

            memberComponents.push(
                <li className={liClasses} key={member.id}>
                    <input type='checkbox' value={member.id}></input>
                    <span className='member-list-item-name'>{member.name}</span>
                </li>
            );
        });

        return memberComponents;
    },

    addMembersToRide(event) {
        let ids = [];

        event.preventDefault();
        event.stopPropagation();

        Array.prototype.forEach.call(event.target.elements, htmlElement => {
            if (htmlElement.type === 'checkbox') {
                if (htmlElement.checked) {
                    ids.push(htmlElement.value);
                }
            }
        });

        this.props.addMembersToRide(ids);
    },

    render() {
        return (
            <div>
                <input type='text' placeholder='Add Passenger' onChange={this.onChange}></input>
                <form onSubmit={this.addMembersToRide}>
                    <ul>
                        {this.displayMemberComponents()}
                        <button
                            onClick={this.addMembers}
                            className='pure-button pure-button-primary'
                        >Add Members</button>
                    </ul>
                </form>
            </div>
        );
    }
});

module.exports = MemberList;
