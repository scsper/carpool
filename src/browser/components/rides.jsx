var React = require('react');
var Fluxxor = require('fluxxor');
var Rides;

Rides = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1-2">
                <ul>
                    <li>Ride 1</li>
                    <li>Ride 2</li>
                    <li>Ride 3</li>
                </ul>
            </div>
        );
    }
});

module.exports = Rides;
