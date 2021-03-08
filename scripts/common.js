let headerTemplate = `
<div class="scribbler-title-container">
    <div class="scribbler-title">
        ScriBBler
    </div>
    <div class="scribbler-subheading">
        Explore, Imagine, Create
    </div>
    </div>
    <div class="scribbler-action">
    <button id="signUp">
        Sign Up
    </button>
    <button id="signIn">
        Sign In
    </button>
</div>


<!-- The Sign up modal -->
<div id="signUpModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title">Get Started</div>    
            <div class="close" id="closeSignUp">&times;</div>
        </div>
        <hr>
        <div class="modal-form">
            <form action="#" method="post" onsubmit="return signUpUser()">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter your username" required>
                <button id="signUpButton" type="submit" >
                    Sign Up
                </button>
            </form>
        </div>

    </div>
</div>
<!-- The Sign In Modal -->
<div id="signInModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title">Welcome Back!</div>    
            <div class="close" id="closeSignIn">&times;</div>
        </div>
        <hr>
        <div class="modal-form">
            <form action="#" method="post" onsubmit="return signInUser()">
                <label for="usernameSignIn">Username</label>
                <input type="text" id="usernameSignIn" name="usernameSignIn" placeholder="Enter your username" required>
                <label for="passwordSignIn">Password</label>
                <input type="password" id="passwordSignIn" name="passwordSignIn" placeholder="Enter your password" required>
                <button id="signInButton" type="submit" >
                    Sign In
                </button>
                <div class="form-info">
                    <span id="signUpText">Not a member?</span>
                    <span id="signUpLink">Sign Up</span>
                </div>
            </form>
        </div>
    </div>
</div>
`;

//Adding header tempplate in common js to be utilised in every html page
document.getElementsByTagName('header')[0].innerHTML=headerTemplate;

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

//Showing signup modal on click of sign up button
signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
};

//Showing signin modal on click of sign in button
signInBtn.onclick = function() {
  signInModal.style.display = "block";
};

//Clearing the signup modal on click of sign in link in sign up modal and showing sign up modal
signUpLink.onclick = function() {
  document.getElementById("usernameSignIn").value = "";
  document.getElementById("passwordSignIn").value = "";
  signUpModal.style.display = "block";
  signInModal.style.display = "none";
};

//Clearing the sign up modal form and closing it
closeSignUp.onclick = function() {
  document.getElementById("name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  signUpModal.style.display = "none";
};

//Clearing the sign in modal form and closing it
closeSignIn.onclick = function() {
  document.getElementById("usernameSignIn").value = "";
  document.getElementById("passwordSignIn").value = "";
  signInModal.style.display = "none";
};

//on submit of sign up form
function signUpUser(e) {
  e.preventDefault();
  signUpModal.style.display = "none";
}

//on submit of sign in form
function signInUser(e) {
  e.preventDefault();
  signInModal.style.display = "none";
}
