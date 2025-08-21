import './style.css';

console.log('Webpack is running!!!!');

const weatherContainer = document.getElementById('weather-container');
const apiKey = process.env.VSC_API_KEY;

//constants for getting input
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input')

//helper function: input validation
function isValidCityInput(input){
    //must contain two commas (City, State, Country)
    const commaCount = (input.match(/,/g) || []).length;
    return commaCount >= 1 && input.trim().length > 0;
}

//event listener
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (!isValidCityInput(city)){ 
        weatherContainer.textContent = "Please enter a city.";
        return; 
    } getWeather(city);
});

//main fetch function
async function getWeather(location = 'New York, NY') {
  try {
    //dynamically buidling based on location
    const encodedLocation = encodeURIComponent(location);
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=us&key=${apiKey}&contentType=json`;

    //weatherContainer.textContent = "⏳ Loading...";
    const response = await fetch(url);
    //catch http errors
    if(!response.ok){
        throw new Error(`City not found or server (status ${response.status})`);
    }

    const data = await response.json();
    console.log('Weather data:', data);

    //display weather: 
    weatherContainer.textContent = `Weather in ${data.resolvedAddress}: ${data.currentConditions.temp}°F, ${data.currentConditions.conditions}`;
  } catch (error) {
    console.error('Fetch error:', error);
    weatherContainer.textContent = `${error.message}`; 
  }
}


getWeather();