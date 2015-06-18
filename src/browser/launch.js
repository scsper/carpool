var React = require('react');
var Fluxxor = require('fluxxor');
var App = require('./components/app.jsx');
var OrganizationStore = require('./stores/organization.js');
var OrganizationActions = require('./actions/organization.js');

window.onload = function() {
    // test es6
    let abcd = 4;
    console.log(abcd);

    require('../browser/styles/app.css');

    var stores = {
        OrganizationStore: new OrganizationStore()
    };

    var flux = new Fluxxor.Flux(stores, OrganizationActions);

    React.render(React.createElement(App, {
        flux: flux
    }), document.getElementById('container'));
};
