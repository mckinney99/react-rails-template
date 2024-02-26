import { AxiosResponse } from "axios";
import axiosWithAuth from "./axiosWithAuth";

const BASE_URL = 'http://localhost:3000/api/v1/payments'
export type Currency = 'usd' | 'cad'| 'eur';
interface paymentBody {
    amount: number;
  currency?: Currency;
}
export const paymentApi = {
    createPaymentIntent: async(body: paymentBody) => {
        try {
            const response: AxiosResponse = await axiosWithAuth.post(
              `${BASE_URL}/create_payment_intent`,
              body
            );
            
            return response.data;
          } catch (error) {
            console.error(error);
          }
    }
}