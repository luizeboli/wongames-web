import { TQueryRecommended } from 'graphql/generated';
import { QueryRecommended } from 'graphql/queries/recommended';
import Success, { SuccessTemplateProps } from 'screens/Success';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<TQueryRecommended>({
    query: QueryRecommended,
  });

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: data.recommended?.data.attributes.section.title,
      recommendedGames: gamesMapper(data.recommended?.data.attributes.section.games),
      recommendedHighlight: highlightMapper(data.recommended?.data.attributes.section?.highlight),
    },
  };
}
