import { gql } from '@apollo/client';

export const GameFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    cover {
      data {
        attributes {
          url
        }
      }
    }
    developers {
      data {
        attributes {
          name
        }
      }
    }
    price
  }
`;

export const GamesFragment = gql`
  fragment GamesFragment on GameEntityResponseCollection {
    data {
      id
      attributes {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`;
