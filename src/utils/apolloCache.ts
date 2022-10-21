import { InMemoryCache } from '@apollo/client/cache';

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: {
          keyArgs: ['filters', 'sort'],
          merge(existing, incoming) {
            if (!existing) return incoming;

            return {
              data: [...existing.data, ...incoming.data],
              meta: incoming.meta,
            };
          },
        },
      },
    },
    Wishlist: {
      fields: {
        games: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
