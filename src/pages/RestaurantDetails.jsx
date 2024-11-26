import React, { useEffect, useState } from "react";
import API from "../api";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    API.get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="p-4">
      {restaurant ? (
        <>
          <h1 className="text-2xl font-bold">{restaurant.name}</h1>
          <p>{restaurant.description}</p>
          <ul className="mt-4">
            {restaurant.menu.map((item) => (
              <li key={item._id} className="mb-2">
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestaurantDetails;
