//Core Node.js
var path = require('path');
var https = require('https');
var fs = require('fs');

//External Dependencies
var _ = require('lodash');
var express = require('express');
var cons = require('consolidate');
var compression = require('compression');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var port = process.env.PORT || 5000;

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')));

// Setup routes
require('./routes/api')(app);
require('./routes/index')(app);

// Fallback to 404
// app.all('*', function(req, res) {
// 	return res.sendFile(path.join(__dirname, '/views/404.html'));
// });

app.listen(port);

console.log('listening on port: %d', port);



// HTML
// CSS
// JS (Express/nodejs)
// Swig
