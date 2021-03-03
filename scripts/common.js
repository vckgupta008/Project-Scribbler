// Get the button that opens the signUp modal
var signUpBtn = document.getElementById("signUp");

// Get the button that opens the signIn modal
var signInBtn = document.getElementById("signIn");

//signUpLink
var signUpLink = document.getElementById("signUpLink");

// Get the signUp modal
var signUpModal = document.getElementById("signUpModal");

// Get the signIn modal
var signInModal = document.getElementById("signInModal");

//closeSignUp
var closeSignUp = document.getElementById("closeSignUp");

//closeSignIn
var closeSignIn = document.getElementById("closeSignIn");

signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
};

signInBtn.onclick = function() {
  signInModal.style.display = "block";
};

signUpLink.onclick = function() {
  document.getElementById("usernameSignIn").value = "";
  document.getElementById("passwordSignIn").value = "";
  signUpModal.style.display = "block";
  signInModal.style.display = "none";
};

closeSignUp.onclick = function() {
  document.getElementById("name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  signUpModal.style.display = "none";
};

closeSignIn.onclick = function() {
  document.getElementById("usernameSignIn").value = "";
  document.getElementById("passwordSignIn").value = "";
  signInModal.style.display = "none";
};

function signUpUser(e) {
  e.preventDefault();
  signUpModal.style.display = "none";
}

function signInUser(e) {
  e.preventDefault();
  signInModal.style.display = "none";
}
