const request = require('request')

const forecast = (latitude,longitude,callback) => {
                                   const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+longitude+'&lon='+latitude+'&APPID=f169210a95383e810ddabb10e36ff69d' 

                                   request ({url,json:true},(error,{body}) => {
                                                                      if(error){
                                                                      callback('Unable to Connect to Weather Service',undefined)                                   
                                                                      }else if(body.error){
                                                                      callback('Unable to find location',undefined)
                                                                      }else{
                                                                      var t = Math.round(body.main.temp-273.15)
                                                                      var t1 = Math.round(body.main.temp_max-273.15)
                                                                      var t2 = Math.round(body.main.temp_min-273.15)
                                                                      let x = body.sys.sunrise;
                                                                      let y = body.sys.sunset;
                                                                      let z = body.timezone;
                                                                      let d1 = new Date(x+z*1000).toLocaleTimeString();
                                                                      let d2 = new Date(y+z*1000).toLocaleTimeString();
                                                                      callback(undefined,'The temperature is '+t+'°C,'+body.weather[0].description+'.Maximum temperature  is '+t1+'°C & Minimum temperature  is '+t2+'°C.Sunrise at '+d1+'.Sunset at '+d2)
                                                                      }
                                   })
                                   
}

module.exports = forecast