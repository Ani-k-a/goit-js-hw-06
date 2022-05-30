'use strict';

const onInpSwapEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const resizeTextEl = (ev) => {
    textEl.style.fontSize = `${ev.target.value}px`
};
onInpSwapEl.addEventListener("input", resizeTextEl);