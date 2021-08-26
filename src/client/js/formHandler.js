const axios = require('axios');
import { updateUI } from './updateUI.js';


export function handleSubmit(event){
    event.preventDefault();

//Get placename entry
let placename = document.getElementById('placename').value;
//Retrieve startDate entry
let startDate = document.getElementById('startDate').value;

console.log(":::Request Made to Server:::", placename,startDate)

//Make Post Request to Server

    axios.post('http://localhost:3000/weather', {placename, startDate})

    //Then log Data recieved.
    .then(function(res){
        const data = res.data

    // //Update User Inteface -> Run UpdateUI function
        updateUI(data)
    })



}