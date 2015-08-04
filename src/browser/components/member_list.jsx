var React = require('react');
var Fluxxor = require('fluxxor');
var classnames = require('classnames');
var filterMemberList = require('./utils/filter_member_list.js');
var MemberList;

MemberList = React.createClass({
    propTypes: {
        members: React.PropTypes.array.isRequired
    },

    getInitialState() {
        return {
            membersToDisplay: filterMemberList(this.props.members, ''),
            filterString: ''
        };
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            membersToDisplay: filterMemberList(nextProps.members, this.state.filterString)
        });
    },

    onChange(event) {
        let filterString = event.target.value;

        this.setState({
            membersToDisplay: filterMemberList(this.props.members, filterString),
            filterString: event.target.value
        })
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

        /**
         * event.target.elements is an object with numbers for keys.
         */
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
