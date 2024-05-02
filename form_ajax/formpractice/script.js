document.getElementById('registrationform').addEventListener('submit',function(event){
    event.preventDefault();


    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");

    var userData = {
        name:name,
        email:email,
        contact:contact
    }

    var xml = new XMLHttpRequest();
    xml.open('POST','https://jsonplaceholder.typicode.com/users',true);
    xml.setRequestHeader('Content-Type' ,'application/json');
    xml.onreadystatechange = function(){
        if(xml.readyState = 4 && xml.status == 201){
            var user = JSON.parse(localStorage.getItem('users'));

            user.push(userData);
        
            localStorage.setItem('users',JSON.stringify(userData));
        
            window.location.href = 'newpage.html';
        }
        else if(xml.readyState = 4){
            console.error('Error occurred while registering user. Status: ' + xhr.status);
            alert('Error occurred while registering user.');
        }
    };
    xml.send(JSON.stringify(userData))
   
});