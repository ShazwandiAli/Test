'use strict';

const userdb = require('../models/UserDB');

var userDBObject = new userdb();

function routeUser(app) {
	app.route('/register').post(userDBObject.addUser);
	app.route('/user/:id').delete(userDBObject.deleteUser).put(userDBObject.updateUser);
	app.route('/updatePassword/:id').put(userDBObject.updatePassword);
	app.route('/login').post(userDBObject.getLoginCredentials);
	app.route('/userCount/:id').get(userDBObject.getReviewCount);
	app.route('/user').get(userDBObject.getUser);
}
module.exports = { routeUser };
