import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';
import { HighlightFragment } from 'graphql/fragments/highlight';

export const QueryUpcoming = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(filters: { release_date: { gt: $date } }, pagination: { limit: 12 }, sort: "release_date:asc") {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`;
