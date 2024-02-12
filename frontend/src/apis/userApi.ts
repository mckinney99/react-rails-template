import axios, { AxiosResponse } from 'axios';
import axiosWithAuth from './axiosWithAuth';

const BASE_URL = 'http://localhost:3000'; // Replace with your API base URL

export interface User {
  email: string;
  password?: string;
  reset_password_token?: Date;
  reset_password_sent_at?: Date;
  remember_created_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  role?: Roles;
  jti?: string;
}

export interface parentUser {
  user: User;
}

//
export interface Roles {
  admin: string;
  employee: string;
  customer_enterprise: string;
  customer_pro: string;
  customer: string;
}

export interface LoginAction {
  type: 'LOGIN';
  payload: User;
}

export interface LogoutAction {
  type: 'LOGOUT';
}

const handleError = () => {
  'There was an error';
};
const destroyToken = () => localStorage.removeItem('token');


const userApi = {
  getCurrentUser: async () => {
    try {
      const response: AxiosResponse = await axiosWithAuth.get(
        `${BASE_URL}/current_user`
      );
      return response.data;
    } catch (error) {
      handleError();
      // throw error;
    }
  },

  postSignUp: async (credentials: User) => {
    try {
      const response: AxiosResponse<User> = await axios.post(
        `${BASE_URL}/signup`,
        credentials
      );
      return response.data;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  postLogin: async (credentials: parentUser): Promise<any> => {
    try {
      const response: AxiosResponse<User> = await axios.post(
        `${BASE_URL}/login`,
        credentials
      );

      return response;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  deleteLogOut: async () => {
    try {
      const response: AxiosResponse<User> = await axiosWithAuth.delete(`${BASE_URL}/logout`);
      if (response.status === 200) {
        destroyToken();
      }
      return response.data;
    } catch (error) {
      console.log(error);
      handleError();
      throw error;
    }
  },
};

export default userApi;
