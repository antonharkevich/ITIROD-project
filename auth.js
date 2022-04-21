const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});




function login(event){
  event.preventDefault()
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  responsePromise = apiLogin(email, password)
  responsePromise.then(response => {
    alert('Welcome back')
    window.location.replace("rating.html");
  });
}


function signUp(event){
  event.preventDefault()
  var email = document.getElementById('sign-email').value;
  var password = document.getElementById('sign-password').value;
  responsePromise = apiSignUp(email, password)
  responsePromise.then(response => {
    alert('Hello')
    window.location.replace("info.html");
  });
}




