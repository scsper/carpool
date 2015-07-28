var Router = require('react-router');
var Route = Router.Route;

var React = require('react');
var App = require('../components/app.jsx');

var routes = (
    <Route path='/' handler={App} name='home'>
    </Route>
);

module.exports = function() {
    var flux = require('./flux.js');

    flux.actions.Event.getInitialEvents({});

    Router.run(routes, Router.HistoryLocation, function(Root) {
        React.render(
            <Root flux={flux} />,
            document.getElementById('container')
        );
    });
}
