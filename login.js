// LOGIN FORM

const loginForm =
document.getElementById('loginForm');

/* LOGIN BUTTON CLICK */

loginForm.addEventListener('submit', function(e){

    e.preventDefault();

    // GET USERNAME

    const username =
    document.getElementById('username').value;

    // GET PASSWORD

    const password =
    document.getElementById('password').value;

    // CORRECT LOGIN DETAILS

    const correctUsername =
    'omsakthi2026';

    const correctPassword =
    'osopstaff';

    // CHECK LOGIN

    if(
        username === correctUsername &&
        password === correctPassword
    ){

        // SAVE LOGIN STATUS

        localStorage.setItem(
            'isLoggedIn',
            'true'
        );

        // SUCCESS MESSAGE

        alert('Login Successful');

        // OPEN MAIN PORTAL

        window.location.href =
        'permission.html';

    }

    else{

        // SHOW ERROR

        document.getElementById(
            'errorMessage'
        ).innerText =
        'Invalid Username or Password';

    }

});