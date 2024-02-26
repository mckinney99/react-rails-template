import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Currency, paymentApi } from '../apis/paymentApi';
import { useEffect, useState } from 'react';


const stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_TYooMQauvdEDq54NiTphI7jx';
const stripePromise = loadStripe(stripePublishableKey);

export default function App({amount, currency}: {amount: number, currency?: Currency}) {
  const [clientSecret, setClientSecret] = useState<string>();

  useEffect(() => {
    handleGetClientSecret();
  }, []);

  const handleGetClientSecret = async () => {
    try {
      const response = await paymentApi.createPaymentIntent({amount, currency});
      
      setClientSecret(response?.client_secret ?? null);
    } catch (error) {
      console.error(error);
    }
  };

  const options: StripeElementsOptions = {
    clientSecret,
  };

  return clientSecret && stripePromise ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  ) : null;
}