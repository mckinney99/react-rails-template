import axios, { AxiosResponse } from 'axios';

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
  User: User;
}

interface Roles {
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
  "There was an error"
}
const getToken = (): string|null => 
    localStorage.getItem('token')


const userApi = {
  getCurrentUser: async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}/current_user`
      );
      return response.data;
    } catch (error) {
      handleError();
      throw error;
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

  postLogin: async (credentials: User):Promise<any> => {
    try {
      const response: AxiosResponse<User> = await axios.post(
        `${BASE_URL}/login`,
        credentials
      );
      console.log(response);
      
      return response;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  deleteLogOut: async () => {
    console.log('logging user out')
    try {
      const response: AxiosResponse<User> = await axios.delete(
        `${BASE_URL}/logout`, 
        { headers : {
          Authorization: 'Bearer ' + getToken()
        }}
      );
      return response.data;
    } catch (error) {
      console.log(error)
      handleError();
      throw error;
    }
  },
};

export default userApi;
