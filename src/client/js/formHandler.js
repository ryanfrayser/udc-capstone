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

    //Then log Data recieved.
    .then(function(res){
        const data = res.data
        console.log(data)
        return data
    })

//Update User Inteface -> Run UpdateUI function
    .then(updateUI(data))


}