const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const inglistEl = document.querySelector('ul');
const ingList = ingredients.map(el => {
  const heading = document.createElement("li");
  heading.textContent = el;
  heading.className = "item";
  inglistEl.append(heading);
});