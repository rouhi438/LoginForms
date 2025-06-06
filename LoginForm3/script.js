const signupBTN = document.getElementById("signupBTN");
const signInSide = document.querySelector(".signin-side");
const helloFriendSide = document.querySelector(".hello-friend-side");
const signInBTN = document.getElementById("signInBTN");
const welcomeSide = document.querySelector(".welcome-side");
const createAccountSide = document.querySelector(".create-account-side");

signupBTN.addEventListener("click", function () {
  signInSide.classList.toggle("active");
  helloFriendSide.classList.toggle("back");
});

signInBTN.addEventListener("click", function () {
  signInSide.classList.toggle("active");
  helloFriendSide.classList.toggle("back");
});
