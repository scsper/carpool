var React = require('react');
var Fluxxor = require('fluxxor');
var Passengers;

Passengers = React.createClass({
    render: function() {
        return (
            <ul>
                <li><p>Hello passenger</p></li>
            </ul>

        );
    }
});

module.exports = Passengers;
