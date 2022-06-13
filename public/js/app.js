const form = document.querySelector('form');
const address = document.querySelector('.search');
const weatherContainer = document.querySelector('.weather-container')

form.addEventListener('submit',(e)=>{
    // prevent page from reloading
    e.preventDefault();

    const city = address.value;

    fetch(`/weather?address=${city}`)
    .then(response=>response.json())
    .then(data=>{
        if(data.error){
            const error = data.error;
        }else{
            console.log(data)
           const {city,condition,county,icon,region,temp,time} = data;  
            //create elements
            const weather_icon = document.createElement('img');
            const weather_area = document.createElement('p')
            const weather_condition = document.createElement('p')
            const weather_region = document.createElement('p')
            const weather_temp = document.createElement('p')
            
            // Add classes
            weather_icon.className='weather__icon'
            weather_area.className='weather__area'
            weather_condition.className='weather__condition'
            weather_region.className='weather__region'
            weather_temp.className='weather__temperature'

        }
    })
})