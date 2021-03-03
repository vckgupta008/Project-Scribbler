// Get the button that opens the signUp modal
var signUpBtn = document.getElementById("signUp");

// Get the signUp modal
var signUpModal = document.getElementById("signUpModal");

//closeSignUp
var closeSignUp = document.getElementById("closeSignUp");

signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
};

closeSignUp.onclick = function() {
  signUpModal.style.display = "none";
};
