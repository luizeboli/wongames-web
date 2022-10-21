import { gql } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/game';
import { HighlightFragment } from 'graphql/fragments/highlight';

export const QueryRecommended = gql`
  query QueryRecommended {
    recommended {
      data {
        attributes {
          section {
            title
            highlight {
              ...HighlightFragment
            }
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
  ${HighlightFragment}
`;
