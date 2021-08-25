const countdown = (date) => {

//Create a countdown by subtracting the future leaving date by the users current date.
    let tripDate = Date.parse(date);
    console.log(tripDate)


    let d = new Date();
    let now =  d.getFullYear() + '-' + (d.getMonth()+1)+'-'+ d.getDate();
     const today = new Date(now).getTime();

    let timeLeft = Math.ceil((tripDate - today) / (1000 * 60 * 60 * 24).toFixed(0));

    return timeLeft

}

module.exports = countdown
