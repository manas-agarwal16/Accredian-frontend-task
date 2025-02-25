import axios from "axios";

// console.log("backend url : ", import.meta.VITE_BACKEND_URL);

const BACKEND_URL = "http://localhost:8001";

const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = BACKEND_URL;
AxiosInstance.defaults.withCredentials = true;

export { AxiosInstance };
