"use strict"

class Review {constructor(id, stars, date, review, reviewRestaurantId, reviewUserId, user) {
    this.id = id;
    this.stars = stars;
    this.date = date;
    this.review = review;
    this.reviewRestaurantId = reviewRestaurantId;
    this.reviewUserId = reviewUserId;
    this.user = user;
}
    getId() {
        return this.id;
    }

    getStars() {
        return this.stars;
    }

    getDate() {
        return this.date;
    }

    getReview() {
        return this.review;
    }

    getReviewRestaurantId() {
        return this.reviewRestaurantId;
    }

    getReviewUserId() {
        return this.reviewUserId;
    }

    getUser() {
        return this.user;
    }

    setId(id) {
        this.id = id;
    }

    setStars(stars) {
        this.stars = stars;
    }

    setDate(date) {
        this.date = date;
    }

    setReview(review) {
        this.review = review;
    }

    setReviewRestaurantId(reviewRestaurantId) {
        this.reviewRestaurantId = reviewRestaurantId;
    }

    setReviewUserId(reviewUserId) {
        this.reviewUserId = reviewUserId;
    }

    setUser(user) {
        this.user = user;
    }
}

module.exports = Review;