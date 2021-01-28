import CardsList, { CardsListProps } from 'components/CardsList';
import mockCards from 'components/PaymentOptions/mock';
import Profile from 'screens/Profile';

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards,
    },
  };
}
