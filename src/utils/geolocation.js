// import token fron config file
require('dotenv').config({
    path:'config/.env'
})
const request = require('request');

// consume API token from mapbox
const token = process.env.MAPBOX_TOKEN;

const geolocation =(address,callback)=>{
    //mapbox url
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limit=1`;

request({url,json:true},(error,response,body)=>{
    if(error){
        callback('Network Error! Check your internet Connection',undefined)
    }else if(body.features.length === 0){
        callback('cannot find location! Try another search term',undefined)
    }else{
        callback(undefined,{
            city : body.features[0].text,
            longitude :body.features[0].center[0],
            latitude : body.features[0].center[1]
       })
    }
})
}

module.exports= geolocation
