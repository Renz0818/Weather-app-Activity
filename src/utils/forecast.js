const request = require('request')

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=d810898179ef4e33360ed52ba653f548&query='+latitude +','+longitude+'&units=m'

   request({url, json:true},(error,{body}) => { if (error) {
      callback('Sorry! Unable to connect to weather service!',undefined)
      }else if (body.error) {
      callback('unable to find location',undefined)
      }else{
      callback(undefined, body.current.temperature + ' \xB0C      ' + body.current.weather_descriptions [0])
      }
      })
      
      }
      module.exports = forecast