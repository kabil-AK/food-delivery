import React from "react";

const RestaurantCard = ({ restaurant, onClick }) => (
  <div
    className="border rounded-lg p-4 cursor-pointer hover:shadow-lg"
    onClick={onClick}
  >
    <h2 className="font-bold">{restaurant.name}</h2>
    <p>{restaurant.location}</p>
    <p>Cuisine: {restaurant.cuisine}</p>
  </div>
);

export default RestaurantCard;
