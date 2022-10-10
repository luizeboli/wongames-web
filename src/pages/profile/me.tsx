import { GetServerSidePropsContext } from 'next';

import FormProfile, { FormProfileProps } from 'components/FormProfile';
import { TQueryProfileMe } from 'graphql/generated';
import { QueryProfileMe } from 'graphql/queries/profile';
import Profile from 'screens/Profile';
import { initializeApollo } from 'utils/apollo';
import protectedRoutes from 'utils/protected-routes';

export default function Me({ username, email }: FormProfileProps) {
  return (
    <Profile>
      <FormProfile username={username} email={email} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  if (!session) {
    return {
      props: {},
    };
  }

  const { data } = await apolloClient.query<TQueryProfileMe>({
    query: QueryProfileMe,
  });

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email,
    },
  };
}
