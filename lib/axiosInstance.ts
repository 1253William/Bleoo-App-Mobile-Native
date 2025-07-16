import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { useAuthStore } from "@/store/AuthStore";

const BASE_URL = "https://bleoo-connect-app-backend.onrender.com";
const TIME_OUT = 50000;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    try {
      const { authStore } = useAuthStore.getState(); 
      const token = authStore?.token;

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    } catch (error) {
      console.warn("Error attaching token to request:", error);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
