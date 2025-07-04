// src/lib/apiClient.js

import axios from "axios";
import { BACKEND_URL } from "@/config/apiConfig";

// Create the axios instance
const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Export the axios instance directly
export default apiClient;

// Export helper function
export const apiRequest = async (endpoint, method = "GET", data, token) => {
  try {
    const res = await apiClient.request({
      url: endpoint,
      method,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      ...(data && { data }),
    });

    return {
      status: "success",
      message: res.data.message || "Success",
      data: res.data.data || null,
      meta: res.data.meta || null,
    };
  } catch (error) {
    const errResponse = error.response?.data || {};
    return {
      status: "error",
      message: errResponse.message || "API error",
      error: errResponse.error || error.message,
      data: null,
    };
  }
};
