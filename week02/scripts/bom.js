// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener("click", function() {
    // Within the Add Chapter button click event function block, between the opening and closing of the callback function argument { ... }, do the following:

    // Check to make sure the input is not blank before completing the remaining tasks in this list by using an if block that provides a message or does nothing and returns the .focus() to the input field.
    if (input.value.trim() !== '') {
        // Move the code that you wrote in the last activity into this if block in order to support the correct flow of the program.

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

        // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener("click", function (){
            chapterli.remove();
            input.focus();
        });

        // Change the input value to nothing or the empty string to clean up the interface for the user.
        input.value = '';

        // Whether or not a list item was created, the focus (active cursor) should be sent to the input element.

        input.focus();
    } else {     
        alert("Please add a chapter and verse reference.");
        input.focus();
    }

});