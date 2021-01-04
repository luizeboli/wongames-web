import Profile from 'screens/Profile';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import ordersMock from 'components/OrdersList/mock';

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock,
    },
  };
}
