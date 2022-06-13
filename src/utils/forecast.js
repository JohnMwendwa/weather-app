require('dotenv').config({
    path:'config/.env'
});
const request = require('request');

//Weather API 
const Weather_API = process.env.WEATHER_API;

const forecast = (latitude,longitude,callback)=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=${Weather_API}&q=${latitude},${longitude}&aqi=yes`;

    request({url,json:true},(error,response,body)=>{
        if(error){
            callback('Network Error! Check your internet connection',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,{
                city:body.location.name,
                region:body.location.region,
                country:body.location.country,
                temp:body.current.temp_c,
                time:body.current.is_day,
                icon:body.current.condition.icon,
                condition:body.current.condition.text
            })
        }
    })
}

module.exports = forecast;
