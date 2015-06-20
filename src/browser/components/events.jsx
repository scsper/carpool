var React = require('react');
var Fluxxor = require('fluxxor');
var Event = require('./event.jsx');
var Events;

Events = React.createClass({
    render: function() {
        var eventComponents = [];

        this.props.events.forEach(function(event) {
            eventComponents.push(<Event key={event.name} event={event} />);
        });

        return (
            <div className="pure-u-1-2">
                <ul>
                    {eventComponents}
                </ul>
            </div>
        );
    }
});

module.exports = Events;
