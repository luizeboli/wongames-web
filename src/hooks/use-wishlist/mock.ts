import { QUERY_WISHLIST } from 'graphql/queries/wishlist';

const gameMock = (id: string) => ({
  id,
  name: `Sample Game ${id}`,
  slug: `sample-game-${id}`,
  price: 10.5,
  developers: [{ name: 'sample developer' }],
  cover: {
    url: '/sample-game.jpg',
  },
  __typename: 'Game',
});

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'lorem@ipsum.com',
    },
  },
  result: {
    data: {
      wishlists: [
        {
          id: 1,
          games: [gameMock('1'), gameMock('2')],
        },
      ],
    },
  },
};

export const wishlistItems = [gameMock('1'), gameMock('2'), gameMock('3')];
