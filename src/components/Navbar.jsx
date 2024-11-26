import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-blue-600 text-white flex justify-between p-4">
      <Link to="/" className="text-lg font-bold">
        Hungry Hippo
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="mr-4">
              Profile
            </Link>
            <Link to="/orders" className="mr-4">
              Orders
            </Link>
            <button onClick={handleLogout} className="text-red-400">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register" className="mr-4">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
