import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { paymentApi } from '../apis/paymentApi';
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function App() {
  const [clientSecret, setClientSecret] = useState<string>();

  useEffect(() => {
    handleGetClientSecret();
  }, []);

  const handleGetClientSecret = async () => {
    try {
      const response = await paymentApi.createPaymentIntent();
      setClientSecret(response?.client_secret ?? null);
    } catch (error) {
      console.error(error);
    }
  };

  const options: StripeElementsOptions = {
    clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {clientSecret && <CheckoutForm />}
    </Elements>
  );
}
