/* Global Variables */

// Open Weather API
const apiKey = "8a1815c4bb8292c0b1d39a5094817e19";
const apiLink = "http://api.openweathermap.org/data/2.5/weather?zip="






// "Generate" Button Action

document.getElementById('generate').addEventListener('click', createEntry);

function createEntry (e){

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'/'+ d.getDate()+'/'+ d.getFullYear();
    //Get Zipcode Entry
    const zipCode = document.getElementById('zip').value;
     //Retrieve Feelings Text
    const feelingsInput = document.getElementById('feelings').value;

    //Run and return Weather API Temp from entered ZIP
    getWeather(apiLink, zipCode, apiKey)

    .then(function(temp) {
        //Add combined info to projectData on server
        postEntry('/addEntry', {
            temperature : temp,
            date: newDate,
            feelings: feelingsInput
        });

    });
};

//Make request to Open Weather API

const getWeather = async (apiLink,  zipCode, apiKey) => {

    const response = await fetch(`${apiLink}${zipCode}&units=imperial&appid=${apiKey}`)

    try {
        const data = await response.json();

        //The temperature at the desired zipcode in Farenheight
        const temp = `${data.main.temp} F`;

        //Print and return the temperature returned
        console.log(temp);
        return temp;
    }
    catch (error) {
        console.log ( 'Something happened...', error)
    }
};


// POST Method for turning the data to JSON
const postEntry = async (url ='', data = {})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(data);

    try {
        const newData = await response.json();
        return newData
    }
    catch (error){
        console.log("Error at postEntry", error)
    }
}

//GET Method to retrieve Data from the Server

