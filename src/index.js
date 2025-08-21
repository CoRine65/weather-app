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

    weatherContainer.innerHTML = `<div class="spinner"></div>`; 
    const response = await fetch(url);
    //catch http errors
    if(!response.ok){
        throw new Error(`City not found or server (status ${response.status})`);
    }

    const data = await response.json();
    const current = data.currentConditions;
    console.log('Weather data:', data);

    // decide background based on temp
    const temp = data.currentConditions.temp;
    let bgColor;

    if (temp <= 32) {
        bgColor = 'linear-gradient(to right, #74ebd5, #ACB6E5)'; // icy blue
    } else if (temp <= 60) {
        bgColor = 'linear-gradient(to right, #2980B9, #6DD5FA)'; // cool
    } else if (temp <= 80) {
        bgColor = 'linear-gradient(to right, #FF512F, #F09819)'; // warm
    } else {
        bgColor = 'linear-gradient(to right, #FF416C, #FF4B2B)'; // hot
    }

    // apply styling
    weatherContainer.innerHTML = `
        <div class="weather-card">
            <h2>Weather in ${data.resolvedAddress}</h2>
            <p><strong>${temp}°F</strong> — ${data.currentConditions.conditions}</p>
            <p>Feels like: ${data.currentConditions.feelslike}°F</p>
            <p>Humidity: ${data.currentConditions.humidity}%</p>
            <p>Wind: ${data.currentConditions.windspeed} mph</p>
            ${data.currentConditions.icon ? `<img src="https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${data.currentConditions.icon}.png" alt="${data.currentConditions.conditions}" />` : ''}
        </div>
    `;

    weatherContainer.style.background = bgColor;
    //fade in
    //weatherContainer.classList.add('fade-in');

    //weatherContainer.textContent = `Weather in ${data.resolvedAddress}: ${data.currentConditions.temp}°F, ${data.currentConditions.conditions}`;
  } catch (error) {
    console.error('Fetch error:', error);
    weatherContainer.textContent = `${error.message}`; 
  }
}


getWeather();