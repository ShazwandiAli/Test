'use strict';

class User {
	constructor(id, userId, joinSince, email, userpic, password, phoneNumber, firstName, lastName, address, gender) {
		this.id = id;
		this.userId = userId;
		this.joinSince = joinSince;
		this.email = email;
		this.userpic = userpic;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.gender = gender;
	}

	getID() {
		return this.id;
	}

	getUserId() {
		return this.userId;
	}

	getJoinSince() {
		return this.joinSince;
	}

	getEmail() {
		return this.email;
	}

	getUserPic() {
		return this.userpic;
	}

	getPassword() {
		return this.password;
	}

	getPhoneNumber() {
		return this.phoneNumber;
	}

	getFirstName() {
		return this.firstName;
	}

	getLastName() {
		return this.lastName;
	}

	getAddress() {
		return this.address;
	}

	getGender() {
		return this.gender;
	}

	setUserId(userId) {
		this.userId = userId;
	}

	setJoinSince(joinSince) {
		this.joinSince = joinSince;
	}

	setEmail(email) {
		this.email = email;
	}

	setUserPic(userPic) {
		this.userpic = userPic;
	}

	setPassword(password) {
		this.password = password;
	}

	setPhoneNumber(phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	setFirstName(firstName) {
		this.firstName = firstName;
	}

	setLastName(lastName) {
		this.lastName = lastName;
	}

	setAddress(address) {
		this.address = address;
	}

	setGender(gender) {
		this.gender = gender;
	}
}

module.exports = User;
