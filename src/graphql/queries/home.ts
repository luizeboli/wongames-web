import { gql } from '@apollo/client';

import { BannerFragment } from 'graphql/fragments/banner';
import { GameFragment } from 'graphql/fragments/game';
import { HighlightFragment } from 'graphql/fragments/highlight';

export const QueryHome = gql`
  query QueryHome($date: Date!) {
    banners {
      data {
        id
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(filters: { release_date: { lte: $date } }, pagination: { limit: 12 }, sort: "release_date:desc") {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    upcomingGames: games(filters: { release_date: { gt: $date } }, pagination: { limit: 12 }, sort: "release_date:asc") {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    freeGames: games(filters: { price: { eq: 0 } }, pagination: { limit: 12 }, sort: "release_date:desc") {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games(pagination: { limit: 12 }) {
              data {
                id
                attributes {
                  ...GameFragment
                }
              }
            }
          }
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`;
