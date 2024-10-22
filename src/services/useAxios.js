import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "localhost:8000";

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

const useAxios = () => {
  const [res, setRes] = useState();
  const [err, setErr] = useState();
  const [load, setLoad] = useState();
  useEffect(() => {}, []);
};

export default useAxios;
