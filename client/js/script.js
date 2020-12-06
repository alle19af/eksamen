//Create a very simple class
class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
};


// ----------- localstorage for login page-------------
const form = document.querySelector('form');

//--------------Show login & out buttons-------------
const loginDiv = document.querySelector('.createUser');
const logoutDiv = document.querySelector('.logout');

//---------------In the form---------------
const usernameInput = document.querySelector('#username');
const passCodeInput = document.querySelector('#password');

//------------------Log in & out buttons------------------
const loginBtn = document.querySelector('#submitUser');
const logoutBtn = document.querySelector('#submitlogout');

//----------------- Changes after login----------------
const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');


//sikre at submit knap kan gøre som vi vil og ikke som default adfærd
form.addEventListener('submit', function(e){
    e.preventDefault();
});

// Sætter "item, til at være værdien af input fra useren og bruger dem senere"
loginBtn.addEventListener('click', function(){
//     let newUser = new Users(username, password);
//    uploadUser(newUser);
  
    localStorage.setItem('brugernavn', usernameInput.value);
    localStorage.setItem('kodeord', passCodeInput.value);
    nameDisplayCheck() //køre denne funktion hver gang knappen trykkes på
    // uploadUser(newUser)
});

// -------------- Hva der skal slettes ved logout.-----------
logoutBtn.addEventListener('click', function(){
    localStorage.removeItem('brugernavn');
    localStorage.removeItem('kodeord');
    nameDisplayCheck() //køre denne funktion hver gang knappen trykkes på
});

//------------------ved tryk på submit user  kør denne funktion--------------
function nameDisplayCheck(){
    if(localStorage.getItem('brugernavn')){
        let username = localStorage.getItem('brugernavn');
        let password = localStorage.getItem('kodeord');
        h1.textContent = "Velkommen "+ username;
        personalGreeting.textContent = "Velkommen til vores hjemmeside du er nu logget in";
        logoutDiv.style.display = 'block';
        loginDiv.style.display = 'none';

        const users = new User(username, password);

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(users),
        
        };    
        // console.log(users);
        fetch('http://localhost:4123', option)
        
        //hvis ikke den eksistere
    } else {
        h1.textContent = "Velkommen stranger";
        personalGreeting.textContent = "Du er ikke logget ind endnu"
       
        logoutDiv.style.display = 'none';
        loginDiv.style.display = 'block';
    }

}


// function uploadUser(user){
    
//     //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// fetch('http://localhost:4123', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   },
//   body: JSON.stringify(user),
// }).then(response => response.json()).then(data => 
//     {
//   alert('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// }

  //For create user page -with localstorage
  document.body.onload = nameDisplayCheck;
//   document.body.onload = uploadUser;

