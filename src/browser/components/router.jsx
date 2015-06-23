var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var App = require('./app.jsx');

module.exports = function() {
    React.render((
        <Router history={new BrowserHistory}>
            <Route path='/' component={App}>

            </Route>
        </Router>
    ));
};
