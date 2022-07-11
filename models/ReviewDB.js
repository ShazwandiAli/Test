'use strict';

var db = require('../db-connection');
const Review = require('../models/Review');
// const User = require('../models/User');
// const Restaurant = require('../models/Restaurant');

class ReviewDB {
	getAllReview(request, respond) {
		var sql = 'SELECT * FROM mydb.review';
		db.query(sql, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	addReview(request, respond) {
		var now = new Date();
		// var userObject = new User(null, null, request.body.review_count);
		// var restaurantObject = new Restaurant(null, null, null, null, null, request.body.review_count);
		var reviewObject = new Review(
			null,
			request.body.stars,
			now.toString(),
			request.body.review,
			request.body.reviewRestaurantId,
			request.body.reviewUserId,
			request.body.user
		);
		var sql =
			'INSERT INTO mydb.review (stars, date, review, reviewRestaurantId, reviewUserId, user) VALUES (?, ?, ?, ?, ?, ?)';

		var values = [
			reviewObject.getStars(),
			reviewObject.getDate(),
			reviewObject.getReview(),
			reviewObject.getReviewRestaurantId(),
			reviewObject.getReviewUserId(),
			reviewObject.getUser()
		];

		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	updateReview(request, respond) {
		var now = new Date();
		var sql = 'UPDATE mydb.review SET stars = ?, review = ?, date = ?, user = ? WHERE id = ?';
		var values = [ request.body.stars, request.body.review, now.toString(), request.body.user, request.params.id];
		console.log("request.body.stars = " + request.body.stars + request.body.review + now.toString() + request.body.user+ request.params.id) ;
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	deleteReview(request, respond) {
		var reviewId = request.params.id;
		var sql = 'DELETE FROM mydb.review WHERE id = ?';
		db.query(sql, reviewId, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}
}

module.exports = ReviewDB;
