'use strict';

const reviewdb = require('../models/ReviewDB');

var reviewDBObject = new reviewdb();

function routeReview(app) {
	app.route('/review').post(reviewDBObject.addReview).get(reviewDBObject.getAllReview);
	app.route('/review/:id').delete(reviewDBObject.deleteReview).put(reviewDBObject.updateReview);
}

module.exports = { routeReview };
