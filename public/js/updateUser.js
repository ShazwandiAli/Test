function updateUser(){
    var response = confirm('Are you sure you want to update this details?');

    if(response == true) {
        var edit_user_url = userUpdate_url + '/' + sessionStorage.getItem("userId");

        var userObject = new Object();
        var updateUser = new XMLHttpRequest();


        updateUser.open('PUT', edit_user_url, true);
        updateUser.setRequestHeader('Content-Type', 'application/json');
        userObject.name = document.getElementById("eName").value;
        userObject.email = document.getElementById("eEmail").value;
        userObject.phoneNumber = document.getElementById("ePhoneNumber").value;
        userObject.address = document.getElementById("eAddress").value;

        // console.log(userObject.name,
        //     userObject.email,
        //     userObject.phoneNumber,
        //     userObject.address, 
        //     edit_user_url)

        updateUser.onload = function(){
            sessionStorage.setItem("user", userObject.name);
            sessionStorage.setItem("userId", userObject.id);
            sessionStorage.setItem("email", userObject.email);
            sessionStorage.setItem("phoneNumber", userObject.phoneNumber);
            sessionStorage.setItem("address", userObject.address);

            window.alert("Update successful!");
            window.location.href = '/index.html';
        };
        updateUser.send(JSON.stringify(userObject));
    }
}

function deleteUser() {
    var response = confirm("Are you sure you want to delete your account?");

    if(response == true) {
        var delete_user_url = userUpdate_url + '/' + sessionStorage.getItem("userId");
        var eraseUser = new XMLHttpRequest();

        eraseUser.open('DELETE', delete_user_url, true);
        eraseUser.setRequestHeader('Content-Type', 'application/json');

        eraseUser.onload = function() {
            window.alert("Deleted user!");
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("phoneNumber");
            sessionStorage.removeItem("address");
            sessionStorage.removeItem("password");

            window.location.href = '/index.html';
        };
        eraseUser.send();
    }
}

function updatePassword() {
    var updatePasswordObject = new Object();
    updatePasswordObject.newPassword = document.getElementById("eNewPassword").value;
    updatePasswordObject.oldPassword = document.getElementById("eOldPassword").value;

    if(updatePasswordObject.oldPassword !== sessionStorage.getItem("password")) {
        window.alert("Old password entered is wrong! Please Try again")
    } else {
        var response = confirm("Are you sure you want to update your password?");

        if(response == true) {
            update_password_url = update_password_url + "/" + sessionStorage.getItem("userId");
            var updatePassword = new XMLHttpRequest;

            updatePassword.open('PUT', update_password_url, true);
            updatePassword.setRequestHeader('Content-Type', 'application/json');

            updatePassword.onload = function() {
                window.alert("Password succesfully updated!");
                sessionStorage.setItem("password", updatePasswordObject.newPassword);
                window.location.href = '/index.html';
            };
            updatePassword.send(JSON.stringify(updatePasswordObject));
        }
    }
}