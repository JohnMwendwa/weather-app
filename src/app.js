// Core Node Modules
const path = require('path');

// NPM modules
const express = require('express');


// Initialize app to use express
const app = express();
const port = 3000;

// Paths
const staticAssetsPath = path.join(__dirname,'../public');

// Set app to use static assets
app.use(express.static(staticAssetsPath));

//ROUTES
app.get('/',(req,res)=>{
    res.send('Weather App')
});
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
