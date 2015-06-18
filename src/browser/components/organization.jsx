var React = require('react');
var Fluxxor = require('fluxxor');
var Organization;

Organization = React.createClass({
    render: function() {
        return (
            <div onClick={this.props.onClick}>{this.props.orgs[0].name}</div>
        );
    }
});

module.exports = Organization;
