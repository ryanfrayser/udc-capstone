/* Global Variables */

//Retrieved ZIP Code
const zipCode = document.getElementById('zip').value;


// Open Weather API
const apiKey = "8a1815c4bb8292c0b1d39a5094817e19";
const apiLink = "api.openweathermap.org/data/2.5/weather?zip="

//Full Weather Request API URL
const weatherRequestUrl = `${apiLink}${zipCode}&appid=${apiKey}`;




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
