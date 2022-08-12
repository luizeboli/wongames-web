import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';

export const QueryWishlist = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(filters: { user: { email: { eq: $identifier } } }) {
      data {
        id
        attributes {
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
