var path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv')
const axios = require('axios').default



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


// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

//---------------- App Logic Below ------------------


// Weather Journal App Logic... for testing.

const projectData = {};
// GET Route

app.get('/getEntry', function (req, res) {
  res.send(projectData);
  console.log("TEST!!")
});

//POST Route

app.post('/weather', async (req,res) => {

  console.log(req.body)


// res.send(projectData);

// console.log('POST Recieved',projectData);
})