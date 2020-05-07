const request = require('request')

const forecast = (latitude,longitude,callback) => {
                                   const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=f169210a95383e810ddabb10e36ff69d'

                                   request ({url,json:true},(error,{body}) => {
                                                                      if(error){
                                                                      callback('Unable to Connect to Weather Service',undefined)                                   
                                                                      }else if(body.error){
                                                                      callback('Unable to find location',undefined)
                                                                      }else{
                                                                      callback(undefined,body.weather[0].description+'.It is currently '+body.main.temp+' degrees outside' )
                                                                      }
                                   })
                                   
}

module.exports = forecast