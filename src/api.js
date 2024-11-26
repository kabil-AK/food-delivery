import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization header for authenticated requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
