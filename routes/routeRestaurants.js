'use strict';

const restaurantdb = require('../models/RestaurantsDB');

var restaurantsDBObject = new restaurantdb();

function routeRestaurant(app) {
	app.route('/restaurants').get(restaurantsDBObject.getAllRestaurants);
	app.route('/restaurants/:id').get(restaurantsDBObject.getOneRestaurant);
	app.route('/restaurantsCount/:id').get(restaurantsDBObject.getResReviewCount);
}
module.exports = { routeRestaurant };
