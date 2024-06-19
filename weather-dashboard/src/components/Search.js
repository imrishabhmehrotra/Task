// src/components/Search.js
import React, { useState } from 'react';
import { fetchWeatherData, fetchForecastData } from '../services/weatherService';
import WeatherDisplay from './WeatherDisplay';

const Search = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      // Fetch current weather and forecast data for the entered city
      const currentWeather = await fetchWeatherData(city);
      const forecastWeather = await fetchForecastData(city);
      setWeatherData(currentWeather);
      setForecastData(forecastWeather);
      setError(null); // Clear any previous error messages
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('City not found. Please enter a valid city name.'); // Display error message
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error-message">{error}</p>}

      {/* Display weather and forecast if data is available */}
      {weatherData && forecastData &&
