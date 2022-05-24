'use strict';

let counterValue = 0;

const swapBtnElDec = document.querySelector("button[data-action='decrement']");
const swapBtnElInc = document.querySelector("button[data-action='increment']");
const countValue = document.querySelector("#value");

const onBtnElDec = swapBtnElDec.addEventListener('click', () => {
    counterValue -= 1
    countValue.textContent = counterValue
}
)
const onBtnElIncr = swapBtnElInc.addEventListener('click', () => {
    counterValue += 1
    countValue.textContent = counterValue
}
)

