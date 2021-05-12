import { useMemo } from 'react';
import { Session } from 'next-auth';
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import apolloCache from './apolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: Session) {
  const httpLink = new HttpLink({ uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` });
  const authLink = setContext((_, { headers }) => {
    const Authorization = session?.accessToken ? `Bearer ${session.accessToken}` : '';

    return { headers: { ...headers, Authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache,
  });
}

export function initializeApollo(initialState = null, session?: Session) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return apolloClientGlobal;
  // Create the Apollo Client once in the client
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(() => initializeApollo(initialState, session), [initialState, session]);
  return store;
}
