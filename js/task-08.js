'use strict';


const onButtonSubm = document.querySelector(".login-form");

  
const inpFoarmComplited = (event => {
    event.preventDefault();

    const {elements: { email, password },
    } = event.currentTarget;
    
    if (email.value === "" || password === "") {
        return alert("Attention! All fields must be filled.")
    }
const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
});

onButtonSubm.addEventListener("submit", inpFoarmComplited);