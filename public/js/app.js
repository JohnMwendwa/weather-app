// select document ellements
const form = document.querySelector('form');
const address = document.querySelector('.search');
const weatherContainer = document.querySelector('.weather-container');
const weather_Error = document.querySelector('#error');
const weather_Success = document.querySelector('#success');



   //create elements        
const weather_icon = document.createElement('img');
const weather_area = document.createElement('p');
const weather_condition = document.createElement('p');
const weather_country = document.createElement('p');
const weather_temp = document.createElement('p');
const weather_error = document.createElement('p');

       // Add classes
 weather_icon.className='weather__icon';
 weather_area.className='weather__area';
 weather_condition.className='weather__condition';
 weather_country.className='weather__country';
 weather_temp.className='weather__temperature';
 weather_error.className='weather__error'


form.addEventListener('submit',(e)=>{
    // prevent page from reloading
    e.preventDefault();

    const city = address.value;
     
    fetch(`/weather?address=${city}`)
    .then(response=>response.json())
    .then(data=>{
        if(data.error){
            const error = data.error;
            weather_error.innerText = error;
            //Append error container 
            weatherContainer.appendChild(weather_Error)
            weather_Error.appendChild(weather_error);

            // Remove previous forecast data when errors occur
             weatherContainer.removeChild(weather_Success)

        }else{
            //Clear form input
            address.value = '';

           const {city,condition,country,icon,region,temp,time} = data.forecast;  
                // Add image src
                weather_icon.setAttribute('src',icon);
                
                //Append text content
                weather_area.innerText = city;
                weather_condition.innerText= condition;
                weather_country.innerText =`${region}, ${country}`;
                weather_temp.innerHTML = `${temp} <sup>o</sup>C`;
                
        // Append all weather elements to weatherContainer
                weatherContainer.appendChild(weather_Success)
                weatherContainer.removeChild(weather_Error)
                weather_Success.append(weather_icon,weather_temp,weather_condition,weather_area,weather_country)
        }
    })
})