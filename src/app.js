const path = require('path');
const express = require('express');
const cors = require('cors')
const forecast = require('./forecast');

const app = express(); 
const port = process.env.PORT || 3006; 

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public'); 

//Setup static dir to serve
app.use(express.static(publicDirectoryPath));


const fetchForecast = async (req,res) => {

    try{
        const forecastData = await forecast(req.query.latitude, req.query.longitude)
         const temperature =  forecastData.temperature
         const weatherDescription =  forecastData.weatherDescription
         console.log(`weather description ${weatherDescription}`)
         const windSpeed =  forecastData.windSpeed
         const windDegree =  forecastData.windDegree
         const windDirection =  forecastData.windDirection
        const feelsLike =  forecastData.feelsLike

        return res.send({
            temperature: temperature,
            weatherDescription: weatherDescription,
            windSpeed: windSpeed,
            windDegree: windDegree,
            windDirection: windDirection,
            feelsLike: feelsLike
        })

    }catch(e){
        console.log(`unable to fetch forecast code ${e}`)
        return res.send({ error: `Unable to fetch forecast`})
    }
 }


 app.get('/forecast', cors(), fetchForecast)

app.get('*', (req, res) => {
    return res.send({
        error: 'endpoint not implemented. Please use /weather to fetch the weather'
    })
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}); 