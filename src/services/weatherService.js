const axios = require('axios');

const fetchWeatherData = async (city) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(url);

    return {
      city: response.data.name,
      temperature: Math.round(response.data.main.temp - 273.15), // Kelvin to Celsius
      description: response.data.weather[0].description,
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = { fetchWeatherData };
