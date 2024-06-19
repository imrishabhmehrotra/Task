// src/services/weatherService.js
import axios from "axios";

const API_KEY = "your_openweathermap_api_key";

const fetchWeatherData = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchForecastData = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchWeatherData, fetchForecastData };
