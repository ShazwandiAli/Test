'use strict';

var db = require('../db-connection');
const User = require('../models/User');
var Comment = require('../models/User');

class UserDB {
	addUser(request, respond) {
		var now = new Date();
		var userObject = new User(
			null,
			request.body.name,
			now.toString(),
			request.body.email,
			request.body.userPic,
			request.body.password,
			request.body.phoneNumber,
			request.body.firstName,
			request.body.lastName,
			request.body.address,
			request.body.gender
		);
		console.log('phone number' + request.body.phoneNumber);
		var sql =
			'INSERT INTO mydb.user (name, join_since, email, userPic, password, phoneNumber, firstName, lastName, address, gender) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

		var values = [
			userObject.getUserId(),
			userObject.getJoinSince(),
			userObject.getEmail(),
			userObject.getUserPic(),
			userObject.getPassword(),
			userObject.getPhoneNumber(),
			userObject.getFirstName(),
			userObject.getLastName(),
			userObject.getAddress(),
			userObject.getGender()
		];
		console.log('User phone number ' + userObject.getPhoneNumber());
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.redirect('/SignUp.html');
			}
		});
	}

	updateUser(request, respond) {
		var userObject = new User(
			request.params.id,
			request.body.name,
			null,
			request.body.email,
			null,
			null,
			request.body.phoneNumber,
			null,
			null,
			request.body.address,
			null
		);

		var sql = 'UPDATE mydb.user SET name = ?, email = ?, phoneNumber = ?, address = ? WHERE id = ?';
		var values = [
			userObject.getUserId(),
			userObject.getEmail(),
			userObject.getPhoneNumber(),
			userObject.getAddress(),
			userObject.getID()
		];
		console.log(userObject.getID());
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				console.log(userObject.getUserId(),
				userObject.getEmail(),
				userObject.getPhoneNumber(),
				userObject.getAddress(),
				userObject.getID());
				respond.json(result);
			}
		});
	}

	updatePassword(request, respond) {
		var sql = 'UPDATE mydb.user SET password = ? WHERE id = ? AND password = ?';
		var values = [ request.body.newPassword, request.params.id, request.body.oldPassword ];

		
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	deleteUser(request, respond) {
		var userID = request.params.id;
		var sql = 'DELETE FROM mydb.user WHERE id = ?';
		console.log(request.params.id);
		db.query(sql, userID, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	getLoginCredentials(request, respond){
        var email = request.body.email;
        var password = request.body.password;
        var msg = "";

        var sql = "SELECT * FROM mydb.user WHERE email = ? AND password = ?";
		var values = [email, password];
		console.log("DB " + email +" " + password);

        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
            	respond.json(result);                
				//respond.redirect("/index?username="+result[0].name);                
            }
          });
    }

	getReviewCount(request, respond) {
		var sql = 'SELECT COUNT(reviewUserId) FROM mydb.review WHERE reviewUserId = ?';
		var values = [ request.params.id ];
		db.query(sql, values, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

	getUser(request, respond) {
		var sql = 'SELECT * FROM mydb.user';
		db.query(sql, function(error, result) {
			if (error) {
				throw error;
			} else {
				respond.json(result);
			}
		});
	}

}

module.exports = UserDB;
