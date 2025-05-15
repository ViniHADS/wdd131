// get the current year and insert it into the element with id "currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// get the last modified date of the document and insert it into the element with id "lastmodified"
document.getElementById("lastmodified").textContent = document.lastModified;


  const menuButton = document.getElementById('hamburguer');
  const nav = document.querySelector('nav');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    nav.classList.toggle('open');
  });