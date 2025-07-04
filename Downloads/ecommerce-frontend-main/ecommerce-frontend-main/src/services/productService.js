// src/services/productService.js

import apiClient from "@/lib/apiClient";

export const fetchProductWithFilter = (query = "") => {
  return apiClient.get(`/api/product/get-all?${query}`);
};
