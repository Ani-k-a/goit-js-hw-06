'use strict';

const onInpSwapEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const resizeTextEl = (el) => {
    textEl.style.fontSize = `${el.target.value}px`
};
onInpSwapEl.addEventListener("change", resizeTextEl);