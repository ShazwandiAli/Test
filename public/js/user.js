function fetchUser() {

	var userObject = new Object();
	userObject.email = document.getElementById("email").value;
	userObject.password = document.getElementById("password").value;

	console.log(document.getElementById("email").value);
	console.log(document.getElementById("password").value);
	console.log("SUBMIT BUTTON IS CLICKED");

	var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

	postComment.open('POST', user_url, true); //Use the HTTP POST method to send data to server
	postComment.setRequestHeader('Content-Type', 'application/json');// postComment.setRequestHeader('Content-Type', 'application/json');

	postComment.onload = function() {
		user_array = JSON.parse(postComment.responseText); // fetch all comments again so that the web page can have updated comments.
		console.log(postComment.responseText);
		if (user_array.length > 0) {
			console.log("IT WENT THROUGH");

			window.location.href = '/index.html';

			sessionStorage.user = user_array[0].name;
			sessionStorage.userId = user_array[0].id;
			sessionStorage.email = user_array[0].email;
			sessionStorage.phoneNumber = user_array[0].phoneNumber;
			sessionStorage.address = user_array[0].address;
			sessionStorage.password = user_array[0].password;

			// var userName = document.getElementById("username");

			// userName.setAttribute(localStorage.user, "");
			
		} else {
			window.location.href = '/SignUp.html';
			window.alert("WRONG CREDENTIALS ENTERED!");
		}
	};
	// Convert the data in Comment object to JSON format before sending to the server.
	postComment.send(JSON.stringify(userObject));
}