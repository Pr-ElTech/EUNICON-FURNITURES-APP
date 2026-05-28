import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_BASE_URL ||
    "https://eunicon-furnitures-1.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attaches token from localStorage to outgoing requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
