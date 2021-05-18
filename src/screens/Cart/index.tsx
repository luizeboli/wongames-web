import CartList, { CartListProps } from 'components/CartList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighlightProps } from 'components/Highlight';
import PaymentForm from 'components/PaymentForm';
import Showcase from 'components/Showcase';
import Layout from 'screens/Layout';

import * as S from './styles';

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps;

const Cart = ({ recommendedGames, recommendedHighlight }: CartProps) => {
  return (
    <Layout>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentForm />
        </S.Content>

        <Divider />
      </Container>

      <Showcase title="You may like these games" games={recommendedGames} highlight={recommendedHighlight} />
    </Layout>
  );
};

export default Cart;
