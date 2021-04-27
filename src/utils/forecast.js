const request = require('request');

const forecast = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=14525880345a16a116e0fc2940198054&query=" + lat + ',' + long + "&units=m";

    request( {url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (response.body.success === false) {
            callback('Invalid Location');
        } else {
            callback(undefined, response.body.current.weather_descriptions + ". It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain.");
        }
    })
}

module.exports = forecast;