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
    notifyOnNetworkStatusChange: true,
    variables: { limit: 15, where: parseQueryStringToWhere({ queryString: query, filterItems }), sort: query.sort as string | null },
  });

  const hasMoreGames = (data?.games?.length || 0) < (data?.gamesConnection?.values?.length || 0);

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

        <section>
          {data?.games?.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    id={game.id}
                    key={game.name}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0]?.name ?? null}
                    img={game.cover!.url}
                    price={game.price}
                  />
                ))}
              </Grid>

              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading src="/img/dots.svg" alt="Loading more games" />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty title=":(" description="We didn't find any games with this filter" />
          )}
        </section>
      </S.Main>
    </Layout>
  );
};

export default GamesScreen;
