export function updateUI (data) {

console.log(data)
document.querySelector('#results').classList.remove("noDisplay")
let location = data.location
let daysLeft = data.countdown

//Set Photo
let photo = data.photoUrl
document.getElementById('pix').setAttribute('src',photo)
document.getElementById('pix').setAttribute('alt',`photo from ${location}`)



//Set Weather Data

let tripHeadline = document.getElementById('tripTitle')

if (daysLeft > 7){
    tripHeadline.innerText =`There are ${daysLeft} days left until your trip to ${location}!`
    displayForecast()
}
else if (daysLeft < 7 && daysLeft > 1) {
    tripHeadline.innerText =`There are ${daysLeft} days left until your trip to ${location}!`
    currentWeather();
}
else if (daysLeft === 1) {
    tripHeadline.innerText =`There is ${daysLeft} day left until your trip to ${location}!`
    currentWeather();
}
else if (daysLeft === 0) {
    tripHeadline.innerText =`Your trip to ${location} is TODAY!`
    currentWeather();
}
else {
    alert('Please enter a valid date... Date is either in the past, or unreadable')
}



//Display Current Weather Fuction

function currentWeather () {
    document.querySelector('#currentWeather').classList.remove("noDisplay")

    const temperature = data.forecast.data[0].temp.toFixed();
    const iconCode = data.forecast.data[0].weather.icon;
    const description = data.forecast.data[0].weather.description;
    const iconSource = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`

document.getElementById('currentTemp').innerText = `${temperature} F`;
document.getElementById('description').innerText = description;
document.getElementById('currentWeatherIcon').setAttribute('src',iconSource);
document.getElementById('currentTitle').innerText = 'Current Weather';
};



//Display 5 Day Forecast Function

function displayForecast () {
    document.querySelector('#forecast').classList.remove("noDisplay");

    document.getElementById('forecastTitle').innerText = "Here's your 5-day Forecast"
    const forecastArray = data.forecast.data

    for(let i = 0;i < forecastArray.length; i++) {

        const ul = document.getElementById('fiveDayForecast');
        const temperature = forecastArray[i].high_temp.toFixed();
        const iconCode = forecastArray[i].weather.icon;
        const description = forecastArray[i].weather.description;
        const iconSource = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`

        const li = document.createElement('li');
        li.classList.add('forecastDay')

        const markup = `
            <img src='${iconSource}' alt='${description}'>
            <h1>${temperature}F</h1>
            <p>${description}</p>
        `
        li.innerHTML = markup;
        ul.appendChild(li);

    }



}
};