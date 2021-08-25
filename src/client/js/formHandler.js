const axios = require('axios');


export function handleSubmit(event){
    event.preventDefault();

//Get placename entry
let placename = document.getElementById('placename').value;
//Retrieve startDate entry
let startDate = document.getElementById('startDate').value;

console.log(placename,startDate)

//Make Post Request to Server

    axios.post('http://localhost:3000/weather', {placename, startDate})

    // //Then post Data.
    // .then(function(res){
    //     console.log(res)
    // })


}