import axios, { AxiosInstance } from 'axios';

const axiosWithAuth: AxiosInstance = axios.create();

export const getToken = (): string | null => localStorage.getItem('token');

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


axiosWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Handle token expiration here, such as logging the user out
      // You can dispatch a logout action or perform any other necessary steps
      // For example:
      // dispatch(logout());
      
      // Clear the expired token from local storage
      localStorage.removeItem('token');

      // Redirect the user to the login page or handle it based on your app's logic
      // history.push('/login');
    }

    return Promise.reject(error);
  }
);

export default axiosWithAuth;
