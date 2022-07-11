'use strict';

var db = require('../db-connection');

class LobangDB {
	getAllLobang(request, respond) {
		var sql = 'SELECT * FROM mydb.monthly_deals';
		db.query(sql, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}
}

module.exports = LobangDB;
