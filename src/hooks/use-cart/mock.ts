import { QueryGames } from 'graphql/queries/games';

export const gamesMock = {
  request: {
    query: QueryGames,
    variables: { filters: { id: { in: ['1', '2'] } } },
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

export const cartItems = [
  {
    id: '1',
    img: '/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game',
  },
  {
    id: '2',
    img: '/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game',
  },
];
