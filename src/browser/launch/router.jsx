var Router = require('react-router');
var Route = Router.Route;

var React = require('react');
var App = require('../components/app.jsx');

// wow. react-router REQUIRES that path="/" use double quotes, not single quotes.
var routes = (
    <Route path="/" handler={App} name='home'>
    </Route>
);

module.exports = function() {
    var flux = require('./flux.js');

    Router.run(routes, Router.HistoryLocation, function(Root) {
        React.render(
            <Root flux={flux} />,
            document.getElementById('container')
        );
    });
}
