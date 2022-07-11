'use strict';

class Restaurant {
	constructor(id, name, address, neighbourhood, postalCode, reviewCount, category, hours, img) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.neighbourhood = neighbourhood;
		this.postalCode = postalCode;
		this.reviewCount = reviewCount;
		this.category = category;
		this.hours = hours;
		this.img = img;
	}

	getID() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getAddress() {
		return this.address;
	}

	getNeighbourhood() {
		return this.neighbourhood;
	}

	getPostalCode() {
		return this.postalCode;
	}

	getReviewCount() {
		return this.reviewCount;
	}

	getCategory() {
		return this.category;
	}

	getHours() {
		return this.hours;
	}

	getImg() {
		return this.img;
	}
}

module.exports = Restaurant;
