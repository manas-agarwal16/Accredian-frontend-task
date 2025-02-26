import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log("BACKEND_URL : ", BACKEND_URL);


const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = BACKEND_URL;
AxiosInstance.defaults.withCredentials = true;

export { AxiosInstance };
