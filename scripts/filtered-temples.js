const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const templePics = document.querySelector("#temple-pics");
const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Oakland California",
      location: "Oakland, California, United States",
      dedicated: "1961, January, 23",
      area: 80157,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
    },
    {
      templeName: "Manhattan New York",
      location: "New York City, New York, United States",
      dedicated: "2004, June, 13",
      area: 20630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-248728-wallpaper.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Kowloon City, Hong Kong",
      dedicated: "1996, May, 26",
      area: 51921,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong_kong_china_temple_exterior1.jpeg"
    },
  ];

// Event listeners
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})
homeButton.addEventListener("click", () => makeTempleCards(temples));
oldButton.addEventListener("click", () => {
  makeTempleCards(temples.filter(temple => Number(temple.dedicated.slice(0,4)) < 1900));
})
newButton.addEventListener("click", () => {
  makeTempleCards(temples.filter(temple => Number(temple.dedicated.slice(0,4)) > 2000))
})



// Loop through the array and create "temple cards" for each temple
const makeTempleCards = (templeList => {
  // clear templePics
  templePics.innerHTML = "";
  // generate the temple picture
  templeList.forEach(temple => {
    // create the elements
    const templeHTML = document.createElement("div");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");
    // image attributes
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");
    // code the elements
    name.innerHTML = temple.templeName;
    location.innerHTML = `Location: ${temple.location}`;
    dedication.innerHTML = `Dedicated: ${temple.dedicated}`;
    area.innerHTML = `Size: ${temple.area} sq ft`;
    // add the elements to the div
    templeHTML.appendChild(name);
    templeHTML.appendChild(location);
    templeHTML.appendChild(dedication);
    templeHTML.appendChild(area);
    templeHTML.appendChild(image);
    // add class to div
    templeHTML.classList.add("temple")
    // add div to document
    templePics.appendChild(templeHTML);
  });
})  

// call makeTempleCards at page load
makeTempleCards(temples);

