const signInBtn = document.querySelector(".btn-signin");
const signinForm = document.querySelector(".signin-form");
const leftBtnHolder = document.querySelector(".leftbtn-holder");
const rightBtnHolder = document.querySelector(".rightbtn-holder");
const signupForm = document.querySelector(".signup-form");
const signUpBtn = document.querySelector(".btn-signup");

signInBtn.addEventListener("click", function () {
  signinForm.className = "signin-form";
  signupForm.className = "signup-form";
  leftBtnHolder.className = "leftbtn-holder";
  rightBtnHolder.className = "rightbtn-holder";

  signinForm.classList.add("left-active");
  leftBtnHolder.classList.add("right-hidden");
  signupForm.classList.add("right-hidden");
});
signUpBtn.addEventListener("click", function () {
  signinForm.className = "signin-form";
  signupForm.className = "signup-form";
  leftBtnHolder.className = "leftbtn-holder";
  rightBtnHolder.className = "rightbtn-holder";

  signinForm.classList.remove("left-active");
  rightBtnHolder.classList.add("active");
  leftBtnHolder.classList.remove("right-hidden");
  signupForm.classList.remove("right-hidden");
});
