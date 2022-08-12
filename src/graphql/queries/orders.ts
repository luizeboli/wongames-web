import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';

export const QueryOrders = gql`
  query QueryOrders($identifier: ID!) {
    orders(filters: { user: { id: { eq: $identifier } } }) {
      data {
        id
        attributes {
          createdAt
          card_brand
          card_last4
          games {
            data {
              id
              attributes {
                ...GameFragment
              }
            }
          }
        }
      }
    }
  }
  ${GameFragment}
`;
