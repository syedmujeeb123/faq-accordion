"use strict";
const displayHiddenText = document.querySelector(".text-1");
const displayHiddenText2 = document.querySelector(".text-2");
const displayHiddenText3 = document.querySelector(".text-3");

const plusOne = document.querySelector(".plus-1");
const plusTwo = document.querySelector(".plus-2");
const plusThree = document.querySelector(".plus-3");
const minusImg = document.querySelector(".minus");
const minusImg2 = document.querySelector(".minus2");
const minusImg3 = document.querySelector(".minus3");

///First///
plusOne.addEventListener("click", function (e) {
  e.preventDefault();
  displayHiddenText.classList.remove("hidden");
  minusImg.classList.remove("hidden");
  plusOne.classList.add("hidden");
  console.log(plus);
});

minusImg.addEventListener("click", function (e) {
  e.preventDefault();
  displayHiddenText.classList.add("hidden");
  minusImg.classList.add("hidden");
  plusOne.classList.remove("hidden");
});

//Second//
plusTwo.addEventListener("click", function (e) {
  e.preventDefault();
  displayHiddenText2.classList.remove("hidden");
  minusImg2.classList.remove("hidden");
  plusTwo.classList.add("hidden");
});

minusImg2.addEventListener("click", function (e) {
  e.preventDefault();
  displayHiddenText2.classList.add("hidden");
  minusImg2.classList.add("hidden");
  plusTwo.classList.remove("hidden");
  //   console.log(plus);
});

//Third//
plusThree.addEventListener("click", function (e) {
  e.preventDefault();
  displayHiddenText3.classList.remove("hidden");
  minusImg3.classList.remove("hidden");
  plusThree.classList.add("hidden");
});

minusImg3.addEventListener("click", function (e) {
  e.preventDefault();
  displayHiddenText3.classList.add("hidden");
  minusImg3.classList.add("hidden");
  plusThree.classList.remove("hidden");
});
