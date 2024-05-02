document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
      
      // Get form data
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      
      // Create an object with user data
      var userData = {
        username: username,
        email: email
      };
  
      // Send data to server using AJAX POST request
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', true); // Replace with your server endpoint URL
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
          // If AJAX request succeeds, store data in local storage and redirect to new page
          var users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
          users.push(userData);
          localStorage.setItem('registeredUsers', JSON.stringify(users));
          window.location.href = 'newpage.html'; // Replace with your new page URL
        } else if (xhr.readyState === 4) {
          // Handle errors
          console.error('Error occurred while registering user. Status: ' + xhr.status);
          alert('Error occurred while registering user.');
        }
      };
      xhr.send(JSON.stringify(userData));
    });
  });
