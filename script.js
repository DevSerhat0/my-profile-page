
const year = document.querySelector("#year");

console.log(year);

const date = new Date();

console.log(date);

const fullyear = date.getFullYear();

console.log(fullyear);

year.textContent = fullyear;