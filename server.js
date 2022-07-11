'use strict';

const express = require('express');
const routeRestaurant = require('./routes/routeRestaurants');
const routeReview = require('./routes/routeReview');
const routeUser = require('./routes/routeUser');
const routeLobang = require('./routes/routeLobang');
const bodyParser = require('body-parser');
var app = express();
var host = '127.0.0.1';
var port = 8080;
var startPage = 'index.html';

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeRestaurant.routeRestaurant(app);
routeReview.routeReview(app);
routeUser.routeUser(app);
routeLobang.routeLobang(app);

function gotoIndex(req, res) {
	console.log(req.params);
	res.sendFile(__dirname + '/' + startPage);
}

app.get('/' + startPage, gotoIndex);

app.route('/');

var server = app.listen(port, host, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
