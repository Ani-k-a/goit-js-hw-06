'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setBgColor = document.querySelector("body");
const onBtnChangeColor = document.querySelector(".change-color");
const numbChangeColor = document.querySelector(".color")

const changeColor = (event => {
  event.preventDefault();

  setBgColor.style.backgroundColor = getRandomHexColor();
  numbChangeColor.textContent = getRandomHexColor();
});

onBtnChangeColor.addEventListener("click", changeColor);
