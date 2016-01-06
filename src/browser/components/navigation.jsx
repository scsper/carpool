var React = require('react');
var Navigation;
var getMenuTitles = require('./utils/get_menu_titles.js');
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

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
                <Tab label={item} />
            );
        });

        return menuComponents;
    },

    render() {
        return (
            <Tabs>
                {this.generateMenuItems()}
            </Tabs>
        );
    }
});

module.exports = Navigation;
