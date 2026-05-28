import axios from "axios";

// Create an axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "https://eunicon-furnitures.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request automatically (if it exists)
axiosInstance.interceptors.request.use((config) => {
  // Get the auth token from localStorage
  const token = localStorage.getItem("authToken");
  
  // If token exists, add it to the request header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// Handle response errors (if needed)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// Function to fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("/allProduct");
    // The API returns products in the "users" array, so we return that
    return response.data.users || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default axiosInstance;
