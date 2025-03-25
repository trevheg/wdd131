// get dates stuff
// get elements from the DOM
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// get a date object
const today = new Date();

// put the current year in the web page
currentYear.innerHTML = today.getFullYear();

// put the last modified date in the page
lastModified.innerHTML = (Date(document.lastModified))
