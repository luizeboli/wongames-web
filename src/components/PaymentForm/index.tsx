import { ShoppingCart } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';

import * as S from './styles';

const PaymentForm = () => {
  return (
    <S.Container>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Container>
  );
};

export default PaymentForm;
