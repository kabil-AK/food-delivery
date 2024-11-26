import React, { useEffect, useState } from "react";
import API from "../api";
import RestaurantCard from "../components/RestaurantCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            restaurant={restaurant}
            onClick={() => navigate(`/restaurant/${restaurant._id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
