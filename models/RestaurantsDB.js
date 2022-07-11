'use strict';

var db = require('../db-connection');
const Restaurant = require('../models/Restaurant');

class RestaurantDB {
	getAllRestaurants(request, respond) {
		var sql = 'SELECT * FROM mydb.restaurant';
		db.query(sql, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	getOneRestaurant(request, respond) {
		var sql = 'SELECT * FROM mydb.restaurant WHERE id = ?';
		var values = [ request.params.id ];
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	getResReviewCount(request, respond) {
		var restaurantObject = new Restaurant(request.params.id);
		console.log('restaurant Id: ' + request.params.id);
		var sql = 'SELECT COUNT(review_restaurant_id) FROM mydb.review WHERE reviewRestaurantId = ?';
		var values = [ restaurantObject.getID() ];
		console.log('restaurant new id: ' + restaurantObject.getID());
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}
}

module.exports = RestaurantDB;
