/* Global Variables */


// "Generate" Button Action

// document.getElementById('generate').addEventListener('click', createEntry);

export function createEntry (e){

    // // Create a new date instance dynamically with JS
    // let d = new Date();
    // let newDate = d.getMonth()+ 1 +'/'+ d.getDate()+'/'+ d.getFullYear();
    //Get placename entry
    const placename = document.getElementById('placename').value;
     //Retrieve Feelings Text
    const startDate = document.getElementById('startDate').value;

    //Run and return Weather API Temp from entered ZIP
    getWeather(apiLink, zipCode, apiKey)

    .then(function(temp) {
        //Add combined info to projectData on server
        postEntry('/addEntry', {
            temperature : temp,
            date: newDate,
            feelings: feelingsInput
        });
    })
    // After post is made to the server, update the UI on the page
    .then(()=>updateUi());

}

//Make request to Open Weather API

export const getWeather = async (apiLink,  zipCode, apiKey) => {

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
export const postEntry = async (url ='', data = {})=>{
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
        console.log("Error at postEntry!", error)
    }
}


// Get information from server and update the UI.

export const updateUi = async ()=>{
    const req = await fetch('/getEntry');

    try {
        const data = await req.json();
        document.getElementById('date').innerHTML = data.Date;
        document.getElementById('temp').innerHTML = data.Temperature;
        document.getElementById('content').innerHTML = data.Feelings;
    }
    catch(error){
        console.log("error updating UI", error);
    }
}