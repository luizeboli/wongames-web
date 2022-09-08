import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';

export const MutationCreateWishlist = gql`
  mutation MutationCreateWishlist($input: WishlistCreateInput!) {
    createWishlist(data: $input) {
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
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
  ${GameFragment}
`;

export const MutationUpdateWishlist = gql`
  mutation MutationUpdateWishlist($id: ID!, $input: WishlistInput!) {
    updateWishlist(id: $id, data: $input) {
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
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
  ${GameFragment}
`;
