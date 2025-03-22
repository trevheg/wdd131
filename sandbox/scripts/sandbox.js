let firstName = 'Antonia';
let lastName = 'Francesca';
const fullNameP = document.querySelector('#fullName');

// Function Declaration: 
// function fullName(first, last) {
//     return `${first} ${last}`;
// }

// Function expression:
// let fullName = function (first, last) {
//     return `${first} ${last}`;
// }

// Arrow Function
// const fullName = (first, last) => `${first} ${last}`;
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// fullNameP.innerHTML = fullName(firstName, lastName);
fullNameP.innerHTML = fullName(firstName, lastName);

console.log(fullName(firstName, lastName));

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}