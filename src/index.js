import './style.css';

console.log('Webpack is running');

const apiKey = process.env.VSC_API_KEY;
const location = encodeURIComponent('New York, NY');
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Weather data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

getWeather();
