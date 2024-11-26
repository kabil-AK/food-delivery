import React, { useState, useEffect } from "react";
import API from "../api";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/orders", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setOrders(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
