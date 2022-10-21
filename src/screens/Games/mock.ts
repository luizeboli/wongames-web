import { QueryGames } from 'graphql/queries/games';

export const noGamesMock = {
  request: {
    query: QueryGames,
    variables: { limit: 15, where: {} },
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GamesConnection',
      },
    },
  },
};

export const gamesMock = {
  request: {
    query: QueryGames,
    variables: { pagination: { limit: 15 }, filters: {}, sort: null },
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '1',
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              short_description: 'sample description',
              price: 10.5,
              developers: {
                data: [{ attributes: { name: 'sample developer' } }],
              },
              cover: {
                data: [
                  {
                    attributes: {
                      url: '/sample-game.jpg',
                    },
                  },
                ],
              },
            },
          },
          {
            id: '2',
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              short_description: 'sample description',
              price: 10.5,
              developers: {
                data: [{ attributes: { name: 'sample developer' } }],
              },
              cover: {
                data: [
                  {
                    attributes: {
                      url: '/sample-game.jpg',
                    },
                  },
                ],
              },
            },
          },
        ],
        meta: {
          pagination: {
            total: 2,
            page: 1,
            pageSize: 2,
            pageCount: 1,
          },
        },
      },
    },
  },
};

export const fetchMoreMock = {
  request: {
    query: QueryGames,
    variables: { limit: 15, start: 1, where: {} },
  },
  result: {
    data: {
      games: [
        {
          id: 2,
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg',
          },
          __typename: 'Game',
        },
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection',
      },
    },
  },
};
