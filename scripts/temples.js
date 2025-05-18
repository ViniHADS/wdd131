// get the current year and insert it into the element with id "currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// get the last modified date of the document and insert it into the element with id "lastmodified"
document.getElementById("lastmodified").textContent = document.lastModified;


  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");

    // Toggle between hamburger and close icons
    hamburger.textContent = nav.classList.contains("open") ? "?" : "??";
  });