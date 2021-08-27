const path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv').config();
const axios = require('axios').default;
const fetch = require('node-fetch');



//Webpack Middleware and Dev Hot Middlleware Setup
const app = express();
const config = require('../../webpack.config');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static('dist'));

//Body Parser
const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// // Serve the files on port 3000.
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!\n');
// });




//Testing Endpoint
app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})


//---------------- App Logic Below ------------------


// Import Modules
const getCord = require("./geoCall")
const countdown = require("./countdown");
const getWeather = require('./weatherCall');
const getPhoto = require('./pixCall')


//POST Route (aka. all the things come back here to meet)

app.post('/weather', async (req,res) => {

const location = req.body.placename;
const date = req.body.startDate;

console.log("::::::::::::::::::::::::::::::::::::::::::::::::")
console.log ('Request Made:::', location, date)

  //Get Countdown
  const countdownDays = await countdown(date);
    console.log(countdownDays, 'Days Away!');


  //Call Geonames API
  const coordinates = await getCord(location);
    console.log(coordinates, 'From Geo Names API');

    let lat = coordinates.lat;
    let lng = coordinates.lng;

  // Call Weather

  const weatherForecast = await getWeather(lat, lng);
    console.log('Forecast recieved::: Todays max temp is:',weatherForecast.data[0].max_temp)

  //Call Photo from Pixabay

  const locationPhoto = await getPhoto(location);
    console.log('Photo Recieved! URL:',locationPhoto)

  try {

    const clientData = {
      location: location,
      date: date,
      countdown: countdownDays,
      forecast: weatherForecast,
      photoUrl: locationPhoto
    }

    res.send(clientData)
    console.log('Data successfully sent from server!')
  }

  catch(error){
    console.log(':::::Error sending data to the Client', error)
  }
})

//Export for testing
module.exports = app;
