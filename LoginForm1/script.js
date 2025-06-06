const SignUp = document.getElementById("SignUp");
const LoGin = document.getElementById("logIn");
const leftPage = document.querySelector(".left-page");
const rightPage = document.querySelector(".right-page");

const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");

SignUp.addEventListener("click", function () {
  rightPage.classList.remove("hidden");
  rightPage.classList.add("show");
  leftPage.classList.add("hidden");
  leftPage.classList.remove("show");
});
LoGin.addEventListener("click", function () {
  rightPage.classList.add("hidden");
  rightPage.classList.remove("show");
  leftPage.classList.add("show");
});

//
//
// Animate
const childs = document.querySelectorAll(".child");
const logBtn = document.querySelector(".log-btn");
const signBtn = document.querySelector(".sign-btn");
const checkSub = document.querySelector(".check-sub");
const container = document.querySelector(".container");
const body = document.querySelector("body");

logBtn.addEventListener("click", function () {
  childs.forEach((child) => {
    child.style.display = "none";
  });
  checkSub.classList.remove("hidden");
  checkSub.classList.add("animate");
  container.classList.add("parent");
  body.style.backgroundColor = "#fff";
});

signBtn.addEventListener("click", function () {
  childs.forEach((child) => {
    child.style.display = "none";
  });
  checkSub.classList.remove("hidden");
  checkSub.classList.add("animate");
  container.classList.add("parent");
  body.style.backgroundColor = "#fff";
});
