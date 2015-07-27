require('phantomjs-polyfill');

var context = require.context('../../', true, /.+\/_browser_\/.+_test\.jsx?$/);
context.keys().forEach(context);

module.exports = context;
