import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';

export const QueryWishlist = gql`
  query QueryWishlist {
    me {
      wishlists {
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
  }
  ${GameFragment}
`;
