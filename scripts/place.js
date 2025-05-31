// get the current year and insert it into the element with id "currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// get the last modified date of the document and insert it into the element with id "lastmodified"
document.getElementById("lastmodified").textContent = document.lastModified;

// ==== Wind Chill Feature ====

// Static temperature (°C) and wind speed (km/h)
const temperature = 8;      // example: 8°C (? 10°C to be valid)
const windSpeed = 10;       // example: 10 km/h (> 4.8 km/h)

// Insert static values into Weather section
document.querySelector("#temperature").textContent = `${temperature} \u00B0C`;
document.querySelector("#wind").textContent = `${windSpeed} km/h`;

// Function to calculate wind chill in °C
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1); // rounds to 1 decimal
}

// Display result
function displayWindChill() {
  const windChillSpan = document.getElementById("windchill");

  if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = `${chill} \u00B0C`; // \u00B0C is the degree Celsius symbol
  } else {
    windChillSpan.textContent = "N/A";
  }
}

// Run on page load
displayWindChill();

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("show");
});