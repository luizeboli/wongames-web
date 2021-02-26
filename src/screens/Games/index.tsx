import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import Empty from 'components/Empty';
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';
import { useQueryGames } from 'graphql/queries/games';
import Layout from 'screens/Layout';
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter';

import * as S from './styles';

export type GamesScreenProps = {
  filterItems: ItemProps[];
};

const GamesScreen = ({ filterItems }: GamesScreenProps) => {
  const { push, query } = useRouter();
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15, where: parseQueryStringToWhere({ queryString: query, filterItems }), sort: query.sort as string | null },
  });

  const handleFilter = (items: ParsedUrlQueryInput) => {
    // Push has an option to preserve scroll: { scroll: false }
    push({
      pathname: '/games',
      query: items,
    });
  };

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } });
  };

  return (
    <Layout>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({ queryString: query, filterItems })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <p>Loading</p>
        ) : (
          <section>
            {data?.games?.length ? (
              <>
                <Grid>
                  {data?.games.map((game) => (
                    <GameCard
                      key={game.name}
                      title={game.name}
                      slug={game.slug}
                      developer={game.developers[0]?.name ?? null}
                      img={game.cover!.url}
                      price={game.price}
                    />
                  ))}
                </Grid>

                <S.ShowMore role="button" onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMore>
              </>
            ) : (
              <Empty title=":(" description="We didn't find any games with this filter" />
            )}
          </section>
        )}
      </S.Main>
    </Layout>
  );
};

export default GamesScreen;
