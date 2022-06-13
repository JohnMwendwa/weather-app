const form = document.querySelector('form');
const address = document.querySelector('.search');
const weatherContainer = document.querySelector('.weather-container');


   //create elements        
const weather_icon = document.createElement('img');
const weather_area = document.createElement('p');
const weather_condition = document.createElement('p');
const weather_country = document.createElement('p');
const weather_region = document.createElement('p');
const weather_temp = document.createElement('p');

       // Add classes
 weather_icon.className='weather__icon';
 weather_area.className='weather__area';
 weather_condition.className='weather__condition';
 weather_country.className='weather__country';
 weather_region.className='weather__region';
 weather_temp.className='weather__temperature';


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
           const {city,condition,country,icon,region,temp,time} = data.forecast;  
                // Add image src
                weather_icon.setAttribute('src',icon);
        }
    })
})