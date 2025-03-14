// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('buttton');
const list = document.querySelector('#list');

// Create a li element that will hold each entry's chapter title and an associated delete button
const chapterli = document.createElement('li');

// Create a delete button
const deleteButton = document.createElement('button');

// Populate the li element variable's textContent or innerHTML with the input value
chapterli.textContent = input.value;

// Populate the button textContent with a ❌
deleteButton.textContent = "❌";

// Append the li element variable with the delete button
chapterli.append(deleteButton);

// Append the li element variable to the unordered list in your HTML
list.append(chapterli);
