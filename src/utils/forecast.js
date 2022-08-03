const request = require('request')

const forecast = (lat, lon, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=b9065adc43bf294ed780b8dd1de7b6a4&query=' + lat + ',' + lon + '&units=f';
  request({ url, json: true }, (error, { body } = {}) => {
    debugger
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%.`)
    }
  })
}

module.exports = forecast
