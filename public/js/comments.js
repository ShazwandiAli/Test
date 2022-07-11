function fetchComments() {
	var request = new XMLHttpRequest();

	request.open('GET', comment_url, true);

	//This command starts the calling of the comments api
	request.onload = function() {
		//get all the comments records into our comments array
		comment_array = JSON.parse(request.responseText);
	};

	request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showMovieComments(element) {
	document.getElementById('emptyComment').innerHTML = 'No review yet. Create one now';
	var item = element.getAttribute('item');
	currentIndex = item;

	document.getElementById('review').textContent = 'Review for ' + movie_array[item].name;
	document.getElementById('commentBody').textContent = '';

	for (var i = 0; i < comment_array.length; i++) {
		if (comment_array[i].reviewRestaurantId == movie_array[item].id) {
			document.getElementById('emptyComment').innerHTML = '';
			selectedMovieId = movie_array[item].id;
			star = '';
			var html =
				'<div class="text-center" style="width:100%;"> \
                            <div class="card"> \
                                <div class="card-body"> \
                                    <p class="card-text" id="rating' +
				i +
				'">' +
				comment_array[i].review +
				'</p> \
                                    <small>by ' +
				comment_array[i].user +
				' @ ' +
				comment_array[i].date +
				'</small> \
                                </div> \
                            </div> \
                        </div>';
			document.getElementById('commentBody').insertAdjacentHTML('beforeend', html);

			var star = '';
			for (var j = 0; j < comment_array[i].stars; j++) {
				console.log(i);
				star += "<img src='img/popcorn.png' style='width:50px' />";
			}
			star +=
				"<img src='img/delete.png' class='edit' data-dismiss='modal' item='" +
				i +
				"' onClick='deleteComment(this)' />";
			star +=
				"<img src='img/edit.png' class='edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" +
				i +
				"' onClick='editComment(this)' />";
			document.getElementById('rating' + i).insertAdjacentHTML('beforebegin', star + '<br/>');
		}
	}
}

function newComment() {
	rating = 0;
	document.getElementById('userComments').value = '';
	document.getElementById('nickname').value = sessionStorage.getItem('user');
}

// Submit or send the new comment to the server to be added.
function addComment() {

	if(sessionStorage.getItem("user") == null) {
		window.alert("You have to be signed in to add comments");
		return;
	} if(document.getElementById('userComments').value == '') {
		window.alert("Enter your review before submitting!");
	} else {
		var comment = new Object();
		comment.reviewRestaurantId = movie_array[currentIndex].id; // Movie ID is required by server to create new comment
		comment.user = document.getElementById('nickname').value; // Value from HTML input text
		comment.review = document.getElementById('userComments').value; // Value from HTML input text
		comment.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
		comment.stars = rating;
		comment.reviewUserId = 1;

		var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

		postComment.open('POST', comment_url, true); //Use the HTTP POST method to send data to server
		postComment.setRequestHeader('Content-Type', 'application/json');

		postComment.onload = function() {
			fetchComments(); // fetch all comments again so that the web page can have updated comments.
		};
		// Convert the data in Comment object to JSON format before sending to the server.
		postComment.send(JSON.stringify(comment));
	}
}

function rateIt(element) {
	var num = element.getAttribute('value');
	var classname = element.getAttribute('class');
	var popcorns = document.getElementsByClassName(classname);
	var classTarget = '.' + classname;

	for (let popcorn of popcorns) {
		popcorn.setAttribute('src', popcornBWImage);
	}
	changePopcornImage(num, classTarget);
}

function changePopcornImage(num, classTarget) {
	switch (eval(num)) {
		case 1:
			document.querySelector(classTarget + "[value='1']").setAttribute('src', popcornImage);
			rating = 1;
			break;
		case 2:
			document.querySelector(classTarget + "[value='1']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='2']").setAttribute('src', popcornImage);
			rating = 2;
			break;
		case 3:
			document.querySelector(classTarget + "[value='1']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='2']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='3']").setAttribute('src', popcornImage);
			rating = 3;
			break;
		case 4:
			document.querySelector(classTarget + "[value='1']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='2']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='3']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='4']").setAttribute('src', popcornImage);
			rating = 4;
			break;
		case 5:
			document.querySelector(classTarget + "[value='1']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='2']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='3']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='4']").setAttribute('src', popcornImage);
			document.querySelector(classTarget + "[value='5']").setAttribute('src', popcornImage);
			rating = 5;
			break;
	}
}

//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editComment(element) {
	var item = element.getAttribute('item');

	currentIndex = item;

	document.getElementById('editnickname').value = comment_array[item].user;
	document.getElementById('edituserComments').value = comment_array[item].review;
	console.log(comment_array[item].stars);
	displayColorPopcorn('editpop', comment_array[item].stars);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
	var pop = document.getElementsByClassName(classname);
	var classTarget = '.' + classname;

	for (let p of pop) {
		p.setAttribute('src', popcornBWImage);
	}
	changePopcornImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateComment() {
	var sUser = sessionStorage.getItem("user");

	if (sUser == null) {
		window.alert("You have to be signed in to edit this comments");
		return;
	} if (sUser !== comment_array[currentIndex].user) {
		window.alert("You can only edit comments written by you!")
	} else {
		var response = confirm('Are you sure you want to update this comment?');
		if (response == true) {
			var edit_comment_url = comment_url + '/' + comment_array[currentIndex].id;
			var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server

			updateComment.open('PUT', edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
			updateComment.setRequestHeader('Content-Type', 'application/json');
			comment_array[currentIndex].user = document.getElementById('editnickname').value;
			comment_array[currentIndex].review = document.getElementById('edituserComments').value;
			comment_array[currentIndex].stars = rating;
			updateComment.onload = function() {
				fetchComments();
			};

			updateComment.send(JSON.stringify(comment_array[currentIndex]));
		}
	}

	
}

//This function deletes the selected comment in a specific movie
function deleteComment(element) {
	var item = element.getAttribute('item'); //get the current item
	var sUser = sessionStorage.getItem("user");
	
	if (sUser == null) {
		window.alert("You have to be signed in to delete comments");
		return;
	} if(sUser != comment_array[item].user) {
			window.alert("You can only delete comments written by you!")
		} else {
			var response = confirm('Are you sure you want to delete this comment?');

				if (response == true) {
					
					var delete_comment_url = comment_url + '/' + comment_array[item].id;
					var eraseComment = new XMLHttpRequest();
					eraseComment.open('DELETE', delete_comment_url, true);
					eraseComment.onload = function() {
						fetchComments();
					};
					eraseComment.send();
				}
			}
}
