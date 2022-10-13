import { useMemo } from 'react';
import { Session } from 'next-auth';
import { ApolloClient, from, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import apolloCache from './apolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API });

function createApolloClient(session?: Session | null) {
  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || '';
    const Authorization = jwt ? `Bearer ${jwt}` : '';

    return { headers: { ...headers, Authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([authLink, errorLink, httpLink]),
    cache: apolloCache,
  });
}

export function initializeApollo(initialState = null, session?: Session | null) {
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

export function useApollo(initialState = null, session?: Session | null) {
  const store = useMemo(() => initializeApollo(initialState, session), [initialState, session]);
  return store;
}
