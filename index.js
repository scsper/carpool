var app = require('./src/server/app.js'),
    DEFAULT_PORT = 3000;

app.set('port', (process.env.PORT || DEFAULT_PORT));

app.listen(app.get('port'), function() {
    console.log('listening for connection on port ' + app.get('port'));
});
