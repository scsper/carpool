var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var React = require('react');
var App = require('../components/app.jsx');

var routes = (
    <Route path='/' component={App} name="home">
    </Route>
);

module.exports = function() {
    var flux = require('./flux.js');

    Router.run(routes, Router.HistoryLocation, function(Handler) {
        React.render(
            <Handler flux={flux} />,
            document.getElementById('container')
        );
    });
}
