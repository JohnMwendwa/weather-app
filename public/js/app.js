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
        }
    })
})