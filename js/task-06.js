const formInpEl = document.querySelector("#validation-input")

formInpEl.addEventListener('blur', event => {
    if (formInpEl.value.length < formInpEl.getAttribute('data-length')) {
        formInpEl.classList.remove('valid');
        formInpEl.classList.add('invalid');
    }
    else {
        formInpEl.classList.add('valid');
        formInpEl.classList.remove('invalid');
    }
})