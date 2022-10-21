import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ShoppingCart } from '@styled-icons/material-outlined';
import { ErrorOutline } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormLoading } from 'components/Form';
import Heading from 'components/Heading';
import { useCart } from 'hooks/use-cart';
import { createPayment, createPaymentIntent } from 'utils/stripe/methods';

import * as S from './styles';

type PaymentFormProps = {
  session: Session;
};

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [freeGames, setFreeGames] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items, clearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({ items, token: session?.jwt as string });

        if (data.freeGames) {
          setFreeGames(true);
          return;
        }

        if (data.error) {
          setError(data.error?.message || 'Unexpeted error');
          return;
        }

        setFreeGames(false);
        setError('');
        setClientSecret(data.client_secret);
      }
    }

    setPaymentMode();
  }, [items, session]);

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({ items, paymentIntent, token: session.jwt as string });

    return data;
  };

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError('');
    setDisabled(event.empty);

    if (event.error) {
      setError(event.error.message);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (freeGames) {
      saveOrder();
      clearCart();
      router.push('/success');
      return;
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!,
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
    }

    saveOrder(payload.paymentIntent);
    setLoading(false);
    clearCart();
    router.push('/success');
  };

  console.log({ freeGames });

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games in the cart, click buy and enjoy</S.FreeGames>
          ) : (
            <CardElement
              onChange={handleChange}
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px',
                  },
                },
              }}
            />
          )}
          {!!error && (
            <S.Error>
              <ErrorOutline size={20} /> {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continue shopping
            </Button>
          </Link>
          <Button fullWidth icon={loading ? <FormLoading /> : <ShoppingCart />} disabled={!freeGames && (loading || disabled || !!error)}>
            {!loading && 'Buy now'}
          </Button>
        </S.Footer>
      </form>
    </S.Container>
  );
};

export default PaymentForm;
