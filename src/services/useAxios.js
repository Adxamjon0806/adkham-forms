import axios from "axios";

export const API_URL = "https://server-for-forms.onrender.com";

// https://server-for-forms.onrender.com
// http://localhost:8000/

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
