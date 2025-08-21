import './style.css';

console.log('Webpack is running!!!!');

const weatherContainer = document.getElementById('weather-container');
const apiKey = process.env.VSC_API_KEY;

//constants for getting input
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input')

//event listener
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city){ //some validations
        getWeather(city);
    }
});

async function getWeather(location = 'New York, NY') {
  try {
    //dynamically buidling based on location
    const encodedLocation = encodeURIComponent(location);
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=us&key=${apiKey}&contentType=json`;

    const response = await fetch(url);
    const data = await response.json();
    console.log('Weather data:', data);

    //display weather: 
    weatherContainer.textContent = `Weather in ${data.location}: ${data.currentConditions.temp}°F, ${data.currentConditions.conditions}`;

  } catch (error) {
    console.error('Fetch error:', error);
  }
}








getWeather();