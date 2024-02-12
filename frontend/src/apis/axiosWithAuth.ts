import axios, { AxiosInstance } from 'axios';

const axiosWithAuth: AxiosInstance = axios.create();

const getToken = (): string | null => localStorage.getItem('token');

axiosWithAuth.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosWithAuth;
