import { GetServerSidePropsContext } from 'next';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import { TQueryOrders } from 'graphql/generated';
import { QueryOrders } from 'graphql/queries/orders';
import Profile from 'screens/Profile';
import { initializeApollo } from 'utils/apollo';
import { ordersMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  if (!session) {
    return {
      props: {},
    };
  }

  const { data } = await apolloClient.query<TQueryOrders>({
    query: QueryOrders,
    fetchPolicy: 'no-cache',
  });

  console.log({ data: data.me?.orders?.data });

  return {
    props: {
      items: ordersMapper(data.me?.orders?.data),
      session,
    },
  };
}
