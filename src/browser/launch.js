var React = require('react');
var App = require('./components/app.jsx');

window.onload = function() {
    require('../browser/styles/app.css');

    React.render(React.createElement(App, {
        flux: require('./launch/flux.js')
    }), document.getElementById('container'));
};
