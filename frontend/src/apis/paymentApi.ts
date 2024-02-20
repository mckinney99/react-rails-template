import { AxiosResponse } from "axios";
import axiosWithAuth from "./axiosWithAuth";

const BASE_URL = 'http://localhost:3000/api/v1/payments'
export const paymentApi = {
    createPaymentIntent: async() => {
        try {
            const response: AxiosResponse = await axiosWithAuth.get(
              `${BASE_URL}/create_payment_intent`
            );
            return response.data;
          } catch (error) {
            console.error(error);
          }
    }
}
