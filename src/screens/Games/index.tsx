import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import Empty from 'components/Empty';
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';
import { useQueryGames } from 'graphql/generated';
import Layout from 'screens/Layout';
import { parseQueryStringToFilters, parseQueryStringToSidebar } from 'utils/filter';

import * as S from './styles';

export type GamesScreenProps = {
  filterItems: ItemProps[];
};

const GamesScreen = ({ filterItems }: GamesScreenProps) => {
  const { push, query } = useRouter();
  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      pagination: {
        limit: 15,
      },
      filters: parseQueryStringToFilters({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

  const hasMoreGames = Number(data?.games?.meta.pagination.page) < Number(data?.games?.meta.pagination.pageCount);

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items,
    });
  };

  const handleShowMore = () => {
    fetchMore({
      variables: { pagination: { limit: 15, start: data?.games?.data.length ?? 0 } },
    });
  };

  return (
    <Layout>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToSidebar({ queryString: query, filterItems })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games?.data.length ? (
            <>
              <Grid>
                {data?.games?.data.map((game) => (
                  <GameCard
                    id={game.id}
                    key={game.id}
                    title={game.attributes.name}
                    slug={game.attributes.slug}
                    developer={game.attributes.developers?.data[0].attributes?.name}
                    img={game.attributes.cover.data?.attributes?.url}
                    price={game.attributes?.price}
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
