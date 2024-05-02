document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create object to store user data
    var userData = {
        username: username,
        email: email,
        password: password
    };

    // Check if localStorage is available
    if (typeof(Storage) !== "undefined") {
        // Retrieve existing data or initialize an empty array
        var users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Push new user data to the array
        users.push(userData);
        
        // Store updated array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Redirect to new page
        window.location.href = 'newPage.html';
    } else {
        alert('Sorry, your browser does not support local storage. Please try again with a different browser.');
    }
});

// Event listener for the "View Registered Users" button
document.getElementById('viewUsersBtn').addEventListener('click', function() {
    window.location.href = 'newPage.html'; // Redirect to the page displaying registered users
});
