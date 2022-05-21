'use strict';
const listItemEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItemEl.length}`)

const listEl = [...listItemEl].map((element, index, array) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.querySelectorAll('li').length}`)
});
