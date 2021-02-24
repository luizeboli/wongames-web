import { gql } from '@apollo/client';

import { BannerFragment } from 'graphql/fragments/banner';
import { GameFragment } from 'graphql/fragments/game';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(where: { release_date_lte: "2021-02-24" }, sort: "release_date:desc", limit: 12) {
      ...GameFragment
    }

    upcomingGames: games(where: { release_date_gt: "2021-02-24" }, sort: "release_date:asc", limit: 12) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 12) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`;
