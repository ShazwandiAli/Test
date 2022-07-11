'use strict';

const lobangdb = require('../models/monthlyLobangDB');

var lobangDBObject = new lobangdb();

function routeLobang(app) {
	app.route('/lobang').get(lobangDBObject.getAllLobang);
}

module.exports = { routeLobang };
