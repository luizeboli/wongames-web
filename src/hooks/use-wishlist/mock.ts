import { MutationCreateWishlist, MutationUpdateWishlist } from 'graphql/mutations/wishlist';
import { QueryWishlist } from 'graphql/queries/wishlist';

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
    query: QueryWishlist,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'test@email.com',
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

export const createWishlistMock = {
  request: {
    query: MutationCreateWishlist,
    context: { session: { jwt: '123' } },
    variables: {
      input: {
        data: {
          games: ['3'],
        },
      },
    },
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('3')],
        },
      },
    },
  },
};

export const updateWishlistMock = {
  request: {
    query: MutationUpdateWishlist,
    context: { session: { jwt: '123' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['1', '2', '3'] },
      },
    },
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('1'), gameMock('2'), gameMock('3')],
        },
      },
    },
  },
};

export const removeWishlistMock = {
  request: {
    query: MutationUpdateWishlist,
    context: { session: { jwt: '123' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['2'] },
      },
    },
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('2')],
        },
      },
    },
  },
};

export const wishlistMappedGames = [
  {
    id: '1',
    title: 'Sample Game 1',
    slug: 'sample-game-1',
    developer: 'sample developer',
    img: '/sample-game.jpg',
    cover: '/sample-game.jpg',
    price: 10.5,
  },
  {
    id: '2',
    title: 'Sample Game 2',
    slug: 'sample-game-2',
    developer: 'sample developer',
    img: '/sample-game.jpg',
    cover: '/sample-game.jpg',
    price: 10.5,
  },
  {
    id: '3',
    title: 'Sample Game 3',
    slug: 'sample-game-3',
    developer: 'sample developer',
    img: '/sample-game.jpg',
    cover: '/sample-game.jpg',
    price: 10.5,
  },
];
