const axios = require('axios').default;

// Call Weather Forcast API

async function getWeather (lat, lng) {

    const apiKey = process.env.WEATHERBIT_API_KEY

    const response = await axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&units=I&days=5&key=${apiKey}`)

    try {
        const data = await response.data

        return (data)
    }
    catch (error) {
      console.log ( "Error getting weather:::", error);
    }
  }


module.exports = getWeather;

