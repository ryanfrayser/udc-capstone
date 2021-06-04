// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//Dependencies
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;
const server = app.listen(port, listening);

function listening () {

    console.log('server is running');
    console.log(`running on local host: ${port}`);
};


// ROUTING

// GET Route

app.get('/getEntry', function (req, res) {
    console.log('GET Received' + projectData);
    res.send(projectData);
});

//POST Route


app.post('/addEntry', addEntry)


function addEntry (req,res){

//Create new entry based on the incoming POST request
let newEntry = {
    Temperature: req.body.temperature,
    Date: req.body.date,
    Feelings: req.body.response
}

// projectData.push(newEntry);
res.send(projectData);

console.log('POST Recieved',projectData);
}
