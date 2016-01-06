/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import ReactDOM from 'react-dom';
import App from '../components/app.jsx';

module.exports = function() {
    var flux = require('./flux.js');

    ReactDOM.render(
        <App flux={flux}/>,
        document.getElementById('container')
    );
}
