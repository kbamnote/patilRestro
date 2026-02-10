// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://resturants-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// CONTACT API
export const sendContact = async (data) => {
  const response = await api.post("/contact", data);
  return response.data;
};

// BOOKING API
export const bookTable = async (data) => {
  const response = await api.post("/bookings", data);
  return response.data;
};
// ORDERS ✅
export const placeOrder = async (data) => {
  const res = await api.post("/orders", data);
  return res.data;
};


export default api;
