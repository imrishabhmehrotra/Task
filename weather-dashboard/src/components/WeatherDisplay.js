// src/components/WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ weatherData, forecastData }) => {
  return (
    <div>
      <h2>Current Weather</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}

      <h2>5-Day Forecast</h2>
      {forecastData && (
        <div>
          {forecastData.list.map((item, index) => (
            <div key={index}>
              <p>Date/Time: {item.dt_txt}</p>
              <p>Temperature: {item.main.temp} °C</p>
              <p>Weather: {item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
