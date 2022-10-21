import { gql } from '@apollo/client';

import { OrderFragment } from 'graphql/fragments/order';

export const QueryOrders = gql`
  query QueryOrders {
    me {
      orders {
        data {
          ...OrderFragment
        }
      }
    }
  }
  ${OrderFragment}
`;
