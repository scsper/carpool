var React = require('react');
var Navigation;
var getMenuTitles = require('./utils/get_menu_titles.js');

Navigation = React.createClass({
    propTypes: {
        type: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    },

    generateMenuItems() {
        let menuTitles = getMenuTitles(this.props.type);
        let menuComponents = [];

        menuTitles.forEach(item => {
            menuComponents.push(
                <li className='nav-item pure-menu-item' key={item}>
                    <a href='#' className='pure-menu-link'>{item}</a>
                </li>
            );
        });

        return menuComponents;
    },

    render() {
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
