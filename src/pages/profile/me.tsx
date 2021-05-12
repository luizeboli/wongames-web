import { GetServerSidePropsContext } from 'next';

import FormProfile, { FormProfileProps } from 'components/FormProfile';
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe';
import { QUERY_PROFILE_ME } from 'graphql/queries/profile';
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

  console.log({ session });

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME,
  });

  return {
    props: {
      session,
      username: data?.me?.username,
      email: data?.me?.email,
    },
  };
}
