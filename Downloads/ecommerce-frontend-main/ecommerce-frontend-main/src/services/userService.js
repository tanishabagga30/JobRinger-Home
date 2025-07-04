import { apiRequest } from "@/lib/apiClient";

// Login user
export const loginUser = (data) => {
  return apiRequest("/auth/signin", "POST", data);
};

// Create user (Signup)
export const createUser = (userData) => {
  return apiRequest("/auth/signup", "POST", userData);
};

// Get user profile
export const userProfile = (token) => {
  return apiRequest("/user/profile", "GET", null, token);
};

// Update user profile
export const updateUser = (token, data) => {
  return apiRequest("/user/profile", "PUT", data, token);
};
