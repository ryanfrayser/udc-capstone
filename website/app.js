/* Global Variables */

// Open Weather API
const apiKey = "8a1815c4bb8292c0b1d39a5094817e19";
const apiLink = "http://api.openweathermap.org/data/2.5/weather?zip="


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();





// "Generate" Button Action

document.getElementById('generate').addEventListener('click', createEntry);

function createEntry (e){

    //Get Zipcode Entry
    const zipCode = document.getElementById('zip').value;

    getWeather(apiLink, zipCode, apiKey);
};

//Using the provided information, make a request to the API

const getWeather = async (apiLink,  zipCode, apiKey) => {

    //Make request to Open Weather API using the entered ZIP Code
    const response = await fetch(`${apiLink}${zipCode}&appid=${apiKey}`)

    try {
        const data = await response.json();

        //Print the temperature returned for the location
        console.log(data.main.temp);
    }
    catch (error) {
        console.log ( 'Something happened...', error)
    }

};