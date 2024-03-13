document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    console.log('Prénom:', firstName);
    console.log('Nom:', lastName);
});