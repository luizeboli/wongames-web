import { gql } from '@apollo/client';

import { GameFragment } from './game';

export const OrderFragment = gql`
  fragment OrderFragment on OrderEntity {
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
  ${GameFragment}
`;
