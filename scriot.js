
const apiKey = 'f3d9264b9ebdcdb3a11a857921bd12b3'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const currentTime = document.getElementById('currentTime');
const weatherInfo = document.getElementById('weatherInfo');
const weatherIcon = document.getElementById('weatherIcon');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
        displayWeather(data);
    } else {
        alert('City not found!');
    }
}

function displayWeather(data) {
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
    currentTime.textContent = `Current Time: ${new Date().toLocaleTimeString()}`;

    // Change background color based on weather condition
    const condition = data.weather[0].main.toLowerCase();
    if (condition.includes('clear')) {
        weatherIcon.className = 'wi wi-day-sunny'; // Sunny icon
        document.body.style.backgroundColor = '#87CEEB'; // Blue for sunny
    } else if (condition.includes('cloud')) {
        weatherIcon.className = 'wi wi-cloudy'; // Cloudy icon
        document.body.style.backgroundColor = '#B0C4DE'; // Light gray for cloudy
    } else if (condition.includes('rain')) {
        weatherIcon.className = 'wi wi-rain'; // Rainy icon
        document.body.style.backgroundColor = '#A9A9A9'; // Dark gray for rainy
    } else if (condition.includes('snow')) {
        weatherIcon.className = 'wi wi-snow'; // Snowy icon
        document.body.style.backgroundColor = '#FFFFFF'; // White for snowy
    } else {
        weatherIcon.className = 'wi wi-na'; // Not available icon
        document.body.style.backgroundColor = '#f0f0f0'; // Default
    }
}



















