'use strict';

class Lobang {
	constructor(id, name, deals, restaurant_id, durationStart, durationEnd) {
		this.id = id;
		this.name = name;
		this.deals = deals;
		this.restaurant_id = restaurant_id;
		this.durationStart = durationStart;
		this.durationEnd = durationEnd;
	}

	getID() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getDeals() {
		return this.deals;
	}

	getRestaurantId() {
		return this.restaurant_id;
	}

	getDurationStart() {
		return this.durationStart;
	}

	getDurationEnd() {
		return this.durationEnd;
	}
}
