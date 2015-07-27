require('babel/register');
require('es6-promise').polyfill();

var organizationsQueries = require('../src/server/queries/organizations');

Promise.all([
    organizationsQueries.create({name: 'C3 Silicon Valley', address: '299 Bassett Street, San Jose, CA'}),
    organizationsQueries.create({name: 'City Church Chicago', address: '777 North Green Street, Chicago, IL'})
]).then(function() {
    console.log('Successfully populated the database');
    process.exit(0);
}).catch(function(err) {
    console.error('Error: ', err);
    process.exit(1);
});

