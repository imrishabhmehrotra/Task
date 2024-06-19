// src/components/FavoriteCities.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const FavoriteCities = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    fetchFavoriteCities();
  }, []);

  const fetchFavoriteCities = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cities");
      setFavoriteCities(response.data);
    } catch (error) {
      console.error("Error fetching favorite cities:", error);
    }
  };

  const addToFavorites = async (cityName) => {
    try {
      await axios.post("http://localhost:3001/cities", { name: cityName });
      fetchFavoriteCities();
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFavorites = async (cityId) => {
    try {
      await axios.delete(`http://localhost:3001/cities/${cityId}`);
      fetchFavoriteCities();
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return (
    <div>
      <h2>Favorite Cities</h2>
      <ul>
        {favoriteCities.map((city) => (
          <li key={city.id}>
            {city.name}
            <button onClick={() => removeFromFavorites(city.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;
