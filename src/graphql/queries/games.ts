import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';

export const QueryGames = gql`
  query QueryGames($filters: GameFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    games(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }

  ${GameFragment}
`;

export const QueryGameBySlug = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
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
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
