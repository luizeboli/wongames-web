import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as AuthProvider } from 'next-auth/client';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { CartProvider } from 'hooks/use-cart';
import WishlistProvider from 'hooks/use-wishlist';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';

import SEO from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <NextNprogress color="#f231A5" startPosition={0.3} stopDelayMs={300} height={3} />
      <AuthProvider session={pageProps.session}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <WishlistProvider>
              <CartProvider>
                <Head>
                  <title>Won Games</title>
                  <link rel="shortcut icon" href="/img/icon-512.png" />
                  <link rel="apple-touch-icon" href="/img/icon-512.png" />
                  <link rel="manifest" href="/manifest.json" />
                  <meta name="description" content="The best game store in the world " />
                </Head>
                <DefaultSeo {...SEO} />
                <GlobalStyles />
                <Component {...pageProps} />
              </CartProvider>
            </WishlistProvider>
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </>
  );
}

export default App;
