const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const testButton = document.getElementById("test-button");
const loginForm = document.getElementById("login");
const wrongUsername = document.getElementById("wrong-username");
const wrongPassword = document.getElementById("wrong-password");
const password = "bingobong";
const username = "admin";
const showPasswordBox = document.getElementById("show-password");

function dontSubmit() {
  loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // stops form submission
  console.log("Form submission prevented");
});
}

/*loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // stops form submission
  console.log("Form submission prevented");
});*/

testButton.onclick=function(){
    console.log(usernameInput.value);
}

submitButton.onclick=()=> login();


function login() {

   if(usernameInput.value === username && passwordInput.value === password) {
    console.log("login successful");
    wrongUsername.style.display = "none";
    wrongPassword.style.display = "none";
   }

    else if(usernameInput.value !== username && passwordInput.value === password) {
        console.log("wrong username");
        wrongUsername.style.display = "block";
        wrongPassword.style.display = "none";
        dontSubmit();
    }

    else if(usernameInput.value === username && passwordInput.value !== password) {
        console.log("wrong password");
        wrongUsername.style.display = "none";
        wrongPassword.style.display = "block";
        dontSubmit();
    }

    else if(usernameInput.value !== username && passwordInput.value !== password) {
        console.log("wrong username and password");
        wrongUsername.style.display = "block";
        wrongPassword.style.display = "block";
        dontSubmit();
    }
}


showPasswordBox.addEventListener("click", togglePassword);

function togglePassword() {
    if(showPasswordBox.checked) {
        //console.log("show password");
        passwordInput.type = "text";
    } else if (!showPasswordBox.checked) {
       //console.log("hide password");
        passwordInput.type = "password";
    }
}