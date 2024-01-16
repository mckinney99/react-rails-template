import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/messages'; // Replace with your API base URL

export interface Message {
  // Define your Message type/interface
  id: number;
  datetime: Date; 
  senderEmail: string;
  subject: string;
  body: string;
}

const handleError = () => {"There was an error"}

const messageApi = {
  // Get a specific message by ID
  getMessage: async (id: number): Promise<Message> => {
    try {
      const response: AxiosResponse<Message> = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  // Get all messages
  getAllMessages: async (): Promise<Message[]> => {
    try {
      const response: AxiosResponse<Message[]> = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  // Create a new message
  postMessage: async (newMessage: Message): Promise<Message> => {
    try {
      const response: AxiosResponse<Message> = await axios.post(BASE_URL, newMessage);
      return response.data;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  // Update a message by ID
  updateMessage: async (id: number, updatedMessage: Message): Promise<Message> => {
    try {
      const response: AxiosResponse<Message> = await axios.put(`${BASE_URL}/${id}`, updatedMessage);
      return response.data;
    } catch (error) {
      handleError();
      throw error;
    }
  },

  // Delete a message by ID
  deleteMessage: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      handleError();
      throw error;
    }
  },
};

export default messageApi;
