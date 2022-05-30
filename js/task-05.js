const formInputEl = document.querySelector("#name-input");
const formTitleEl = document.querySelector("#name-output");

formInputEl.addEventListener('input', event => {
    formTitleEl.textContent = event.target.value;
    if (event.target.value === "") {
        formTitleEl.textContent = "Anonymous";
    }
})

