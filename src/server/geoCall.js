//Geonames Fetch Request
const axios = require('axios').default;


async function getCord (location) {
    const username = process.env.GEO_USERNAME

    const response = await axios.get(`http://api.geonames.org/postalCodeSearchJSON?placename=${location}&maxRows=1&username=${username}`)

    try {
        const data = await response.data

      //  console.log(data.postalCodes[0].lat)

       let coordinates =  {
         lat: data.postalCodes[0].lat,
         lng: data.postalCodes[0].lng
       }

       return coordinates;
    }
    catch (error) {
      console.log ( "Error fetching Coordinates", error);
    }
  }

  module.exports =
      getCord
