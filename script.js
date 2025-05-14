// Your OpenWeatherMap API Key
const apiKey = 'YOUR_API_KEY';
const city = 'Bhubaneswar'; // Change this to any city you like

// Fetch weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    // Get elements to update
    const cityElement = document.getElementById('city');
    const weatherIconElement = document.getElementById('weather-icon');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    // Update the HTML with data from the API
    cityElement.innerText = `📍 ${data.name}`;
    weatherIconElement.innerText = getWeatherIcon(data.weather[0].main);
    temperatureElement.innerText = `${data.main.temp}°C`;
    descriptionElement.innerText = data.weather[0].description;
  })
  .catch(error => console.error('Error fetching weather data:', error));

// Function to get the appropriate weather icon
function getWeatherIcon(weather) {
  if (weather === 'Clear') return '☀️';
  if (weather === 'Clouds') return '☁️';
  if (weather === 'Rain') return '🌧️';
  if (weather === 'Thunderstorm') return '⚡';
  if (weather === 'Snow') return '❄️';
  return '🌤️'; // Default
}
