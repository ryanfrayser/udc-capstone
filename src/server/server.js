var path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv')


const app = express();
const config = require('../../webpack.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static('public'));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});




// Weather Journal App Logic... for testing.

const projectData = {};
// GET Route

app.get('/getEntry', function (req, res) {
  res.send(projectData);
  console.log("TEST!!")
});

//POST Route

app.post('/addEntry', addEntry)

function addEntry (req,res){

//Create new entry based on the incoming POST request
let newEntry = {
  Temperature: req.body.temperature,
  Date: req.body.date,
  Feelings: req.body.feelings
}
Object.assign(projectData, newEntry);
res.send(projectData);

// console.log('POST Recieved',projectData);
}