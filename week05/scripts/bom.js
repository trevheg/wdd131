// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener("click", function() {
    //     Change the button click event listener to only do the following tasks (the other tasks in that original function will be used in a separate function named displayList):    
    if (input.value.trim() !== '') { // Check if the input is empty; if it is not empty, then ...
        displayList(input.value);// Call displayList with the input.value argument       
        chaptersArray.push(input.value);    // Push the input.value into the chaptersArray       
        setChapterList();       // Update the localStorage with the new array by calling a function named setChapterList 
        input.value = '';      // Set the input.value to nothing 
        input.focus();    // Set the focus back to the input.  
    } else {     
        alert("Please add a chapter and verse reference.");
        input.focus();
    }
});

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList (This function does not exist, yet).
let chaptersArray = getChapterList() || [];

// Now populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. That way each entry will be processed (i.e., appended to the list).
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) { // Put all the code that builds a list item from the previous button click event listener into this new displayList function and use the item parameter as the input. A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage.  
    const chapterli = document.createElement('li'); // Create a li element that will hold each entry's chapter title and an associated delete button
    const deleteButton = document.createElement('button'); // Create a delete button   
    chapterli.textContent = item; // Populate the li element variable's textContent or innerHTML with the input value   
    deleteButton.textContent = "❌"; // Populate the button textContent with a ❌
    deleteButton.classList.add('delete');  
    chapterli.append(deleteButton); // Append the li element variable with the delete button   
    list.append(chapterli); // Append the li element variable to the unordered list in your HTML   
    deleteButton.addEventListener("click", function (){ // Add an event listener to the delete button that removes the li element when clicked.
        chapterli.remove();// might need to replace with list.removeChild(li);
        deleteChapter(chapterli.textContent);
        input.focus();
    });
}

// Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem("FavBOMList", JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, you will need to use JSON.parse on the string.
function getChapterList() {
    return JSON.parse(localStorage.getItem("FavBOMList"));
}

// Finally, define the deleteChapter function with a parameter named chapter that does three things
function deleteChapter(chapter) {
    // Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when you called the deleteChapter function. Use string.slice() method to extract the last character.
    chapter = chapter.slice(0, chapter.length - 1);
    // Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}