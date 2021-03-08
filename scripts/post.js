//Getting post user info from session storage
let userInfo = JSON.parse(sessionStorage.getItem("post-user"));
console.log(userInfo);
var editPost = "",
  savePost = "",
  postTitle = "",
  inputTitle = "",
  postInformation = "",
  inputInformation = "";

//Printing the post information
printUserInfo(userInfo);

//Function to print post information
function printUserInfo(userInfo) {
  let postBody = document.getElementsByClassName("post-body")[0];
  let postInfo = "";
  userInfo.map(user => {
    let userComments = "";
    //Fetching user comment on the post
    if (user.comments.length) {
      user.comments.forEach(comment => {
        userComments += `<div class="comments-item">${comment}</div>`;
      });
    }
    postInfo = `
        <h3 class="post-title">
            ${user.title}
        </h3>
        <input class="input-title" id="inputTitle" value="${
          user.title
        }" style="display:none"/>
        <div class="post-subheading">
            <div class="post-user">
                ${user.user}
            </div>
            <div class="post-action">
                <button id="editPost">
                    Edit <i class="fa fa-edit"></i>
                </button>
                <button id="savePost" style="display:none">
                    Save <i class="fa fa-save"></i>
                </button>
            </div>
        </div>
        <div class="post-information">
            ${user.info}
        </div>
        <textarea class="input-information" id="inputInformation" style="display:none">${
          user.info
        }</textarea>
        
        ${
          user.postLikes == 0
            ? `<div class="post-like">
                    <button id="likeButton" onclick="increaseLike()">
                        <i class="fa fa-thumbs-up"></i> Like
                    </button>
                </div>
                <div class="post-like-text">
                    Be the first one to like this!
                </div>`
            : `<div class="post-like">
                    <button id="likeButton" onclick="increaseLike()">
                        <i class="fa fa-thumbs-up"></i> Liked
                    </button>
                </div>
                <div class="post-like-text">
                    ${user.postLikes} ${
                user.postLikes == 1 ? `person` : `people`
              } likes this!
                </div>
            `
        }
        <textarea id="postComment" placeholder="Leave a comment...">

        </textarea>
        <div>
            <button id=postCommentButton onclick="postComments()">
                Comment
            </button>
        </div>
        <div class="comment-title">
            All Comments
        </div>
        ${
          user.comments.length
            ? `
            <div class="comment-list">
                ${userComments}
            </div>
            `
            : ""
        }
        `;
  });
  postBody.innerHTML = postInfo;
  editPost = document.getElementById("editPost");
  savePost = document.getElementById("savePost");
  //Adding click event when user click on edit post
  editPost.addEventListener("click", editPage);
  //Adding click event when user click on save post
  savePost.addEventListener("click", saveEditPost);
  postTitle = document.getElementsByClassName("post-title")[0];
  inputTitle = document.getElementsByClassName("input-title")[0];
  postInformation = document.getElementsByClassName("post-information")[0];
  inputInformation = document.getElementsByClassName("input-information")[0];
  document.getElementById("postComment").value = "";
}

let likeButton = document.getElementById("likeButton");
let postLikeText = document.getElementsByClassName("post-like-text")[0];

//Setting the page in edit mode
function editPage() {
  editPost.style.display = "none";
  savePost.style.display = "block";
  postTitle.style.display = "none";
  inputTitle.style.display = "block";
  postInformation.style.display = "none";
  inputInformation.style.display = "block";
}

//Saving the page after edit
function saveEditPost() {
  console.log(inputTitle.value);
  console.log(inputInformation.value);
  userInfo[0].title = inputTitle.value;
  userInfo[0].info = inputInformation.value;
  //Printing the page with updated user info
  printUserInfo(userInfo);
}

//Function to increase likes and update the user information followed by printing it
function increaseLike() {
  userInfo[0].postLikes++;
  printUserInfo(userInfo);
}

//Function to push the comments in the user info and printing it
function postComments() {
  let textAreaComment = document.getElementById("postComment");
  if (textAreaComment.value) {
    userInfo[0].comments.push(textAreaComment.value);
    textAreaComment.value = "";
    printUserInfo(userInfo);
  }
}
