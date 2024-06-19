// src/components/Dashboard.js
import React from "react";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import FavoriteCities from "./FavoriteCities";

const Dashboard = () => {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <Search />
      <WeatherDisplay />
      <FavoriteCities />
    </div>
  );
};

export default Dashboard;
