import React from "react";

const OrderCard = ({ order }) => {
  const orderStatusColor = {
    preparing: "bg-yellow-300",
    outForDelivery: "bg-blue-500",
    delivered: "bg-green-500",
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="font-bold">Order #{order._id}</h2>
      <p>
        Status:{" "}
        <span className={`text-white ${orderStatusColor[order.status]}`}>
          {order.status}
        </span>
      </p>
      <p>Restaurant: {order.restaurantName}</p>
      <p>Total: ₹{order.totalAmount}</p>
      <p>Delivery Address: {order.deliveryAddress}</p>
    </div>
  );
};

export default OrderCard;
