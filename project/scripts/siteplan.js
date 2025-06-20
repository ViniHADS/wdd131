// get the current year and insert it into the element with id "currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// get the last modified date of the document and insert it into the element with id "lastmodified"
document.getElementById("lastmodified").textContent = document.lastModified;

// Toggle the navigation menu when the hamburger icon is clicked
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const imageData = [
  {
    Picture: "City View",
    category: "City",
    imageUrl: ""
  },
  {
    Picture: "Wild Tiger",
    category: "Animals",
    imageUrl: "images/animal1.jpg"
  },
  {
    Picture: "Forest",
    category: "Nature",
    imageUrl: "images/nature1.jpg"
  },
  {
    Picture: "Pizza",
    category: "Food",
    imageUrl: "images/food1.jpg"
  },
  {
    Picture: "City Skyline",
    category: "City",
    imageUrl: "images/city1.jpg"
  },
  {
    Picture: "Mountain Range",
    category: "Nature",
    imageUrl: "images/nature2.jpg"
  },
  {
    Picture: "Wildlife Safari",
    category: "Animals",
    imageUrl: "images/animal2.jpg"
  },
  {
    Picture: "Gourmet Dish",
    category: "Food",
    imageUrl: "images/food2.jpg"
  },
  {
    Picture: "Urban Landscape",
    category: "City",
    imageUrl: "images/city2.jpg"
  },
  {
    Picture: "Rainforest",
    category: "Nature",
    imageUrl: "images/nature3.jpg"
  },
  {
    Picture: "Street Food",
    category: "Food",
    imageUrl: "images/food3.jpg"
  },
  {
    Picture: "Safari Adventure",
    category: "Animals",
    imageUrl: "images/animal3.jpg"
  }
];