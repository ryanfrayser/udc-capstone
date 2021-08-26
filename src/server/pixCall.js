const axios = require('axios').default;

//Get Photo from Pixabay API based on the location entered.
const getPhoto = async (location) => {

        const formattedLocation = location.replace(/\s/g, '+');
        const apiKey = process.env.PIXABAY_API_KEY

        const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${formattedLocation}&image_type=photo&per_page=3`);

        try {
            const data = response.data;

            return data.hits[0].webformatURL;
        }

        catch(error){
            console.log('Error fetching photo:::::::', error)

        }
};

module.exports= getPhoto;