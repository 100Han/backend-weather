const Weather = require('../models/weather');
const { fetchWeatherData } = require('../services/weatherService');

const getWeather = async (req, res) => {
  const city = req.params.city;

  try {
    const weatherData = await fetchWeatherData(city);

    // Save data to the database
    const weather = new Weather(weatherData);
    await weather.save();

    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getWeather };
