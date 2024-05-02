document.getElementById('registrationform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var userData = {
        username: username,
        email: email,
        password: password
    };

    if (typeof(Storage) !== "undefined") {
        var users = JSON.parse(localStorage.getItem('users')) || [];

        users.push(userData);

        localStorage.setItem('users', JSON.stringify(users));

        window.location.href = 'newpage.html';
    } else {
        alert('Sorry, your browser does not support local storage. Please try again with a different browser.');
    }
});

document.getElementById('viewusersbutton').addEventListener('click', function() {
    window.location.href = 'newpage.html';
});
