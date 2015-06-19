var React = require('react');
var Fluxxor = require('fluxxor');
var Events = require('./events.jsx');
var Rides = require('./rides.jsx');
var Organization;

Organization = React.createClass({
    render: function() {
        return (
            <div className="pure-g">
                <Events />
                <Rides />
            </div>
        );
    }
});

module.exports = Organization;
