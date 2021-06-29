
const request = require('request-promise');


const forecast = async (latitude,longitude) => {
    const url = `http://api.weatherstack.com/current?access_key=97479cb862ec0a702d587372507c3642&query=${latitude},${longitude}&units=f`;

    try{
        const res = await request({  url, json: true})
        console.log(res)
        if(res.length === 0){
            return(`Unable to find location. Try another search, undefined`)
        }
        const temperature = res.current.temperature
        const weather_description = res.current.weather_descriptions[0]
        const wind_speed = res.current.wind_speed
        const wind_degree = res.current.wind_degree
        const wind_dir = res.current.wind_dir
        const feelslike = res.current.feelslike

        return {
            temperature: temperature,
            weatherDescription: weather_description,
            windSpeed: wind_speed,
            windDegree: wind_degree,
            windDirection: wind_dir,
            feelsLike: feelslike
        }


    } catch(e) {
        console.log(`unable to fetch forecase form weatherstack ${e}`)
        return(`Unable to connect to weather servicee, undefined`)
    }
}

module.exports = forecast; 