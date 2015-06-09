var React = require('react');
var App = require('../browser/components/app.jsx');

window.onload = function(e) {
    require('../browser/styles/app.css');
    React.render(React.createElement(App), document.getElementById('container'));
};
