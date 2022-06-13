// Core Node Modules
const path = require('path');

// NPM modules
const express = require('express');
const hbs =require('hbs');

const geolocation = require('./utils/geolocation');
const forecast = require('./utils/forecast');
// Initialize app to use express
const app = express();
const port = 3000;

// Define paths to config express
const staticAssetsPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');

// Set app to use static assets
app.use(express.static(staticAssetsPath));

// set views engine and directory
app.set('view engine','hbs');
app.set('views',viewsPath)

//ROUTES
app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/weather',(req,res)=>{
    const city = req.query.address;
    if(!city){
        return res.send({
            error:'You must provide an address'
        })
    }
    geolocation(city,(error,{latitude,longitude}={})=>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                forecast:forecastData
            })
        })

    })
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
