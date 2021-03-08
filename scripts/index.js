// Get the button that opens the create post modal
var createPostButton = document.getElementById("createPost");

// Get the createPost modal
var createPostModal = document.getElementById("createPostModal");

//closePostModal
var closePostModal = document.getElementById("closePostModal");

document.getElementById("contents").value = "";

//Showing create post modal
createPostButton.onclick = function() {
  createPostModal.style.display = "block";
};

//Clearing create post modal and closing it
closePostModal.onclick = function() {
  document.getElementById("title").value = "";
  document.getElementById("contents").value = "";
  createPostModal.style.display = "none";
};
