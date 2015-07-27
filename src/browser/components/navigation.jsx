var React = require('react');
var Navigation;

Navigation = React.createClass({
    propTypes: {
        type: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    },

    generateMenuItems() {
        var menuItems = [];
        var menuComponents = [];

        switch (this.props.type) {
            case 'admin':
                menuItems = ['Events', 'Members', 'Notifications'];
                break;
            case 'driver':
                menuItems = ['Drive', 'Upcoming Drives', 'Notifications'];
                break;
            case 'passenger':
                menuItems = ['Book', 'Upcoming Rides', 'Notifications'];
                break;
            default:
                throw new Error ('Unknown passenger type ' + this.state.type + ' passed to Navigation component.');
        }

        menuItems.forEach(item => {
            menuComponents.push(
                <li className='nav-item pure-menu-item'><a href='#' className='pure-menu-link'>{item}</a></li>
            );
        });

        return menuComponents;
    },

    render: function() {
        return (
            <div className='header'>
                <div className='pure-menu pure-menu-horizontal'>
                    <a className='pure-menu-heading' href=''>{this.props.type}</a>

                    <ul className='pure-menu-list'>
                        {this.generateMenuItems()}
                    </ul>

                    <div className='user'>
                        <span>Hello, {this.props.name}!</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
