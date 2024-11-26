import React, { useState, useEffect } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    API.get("/users/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [navigate]);

  return (
    <div className="p-4">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="bg-red-500 text-white p-2 rounded mt-4"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default Profile;
