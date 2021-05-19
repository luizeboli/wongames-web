import { PaymentIntent } from '@stripe/stripe-js';

import { CartItem } from 'hooks/use-cart';

type FetcherProps = {
  url: string;
  body: string;
  token: string;
};

const fetcher = async ({ url, body, token }: FetcherProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body,
  });

  return await response.json();
};

type PaymentIntentProps = {
  items: CartItem[];
  token: string;
};

export const createPaymentIntent = async ({ items, token }: PaymentIntentProps) => {
  return fetcher({ url: '/orders/create-payment-intent', body: JSON.stringify({ cart: items }), token });
};

type CreatePaymentProps = {
  items: CartItem[];
  paymentIntent?: PaymentIntent;
  token: string;
};

export const createPayment = ({ items, paymentIntent, token }: CreatePaymentProps) => {
  return fetcher({
    url: '/orders',
    body: JSON.stringify({ cart: items, paymentIntentId: paymentIntent?.amount, paymentMethod: paymentIntent?.payment_method }),
    token,
  });
};
