import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';
import { useQueryGames } from 'graphql/queries/games';
import Layout from 'screens/Layout';

import * as S from './styles';

export type GamesScreenProps = {
  filterItems: ItemProps[];
};

const GamesScreen = ({ filterItems }: GamesScreenProps) => {
  const { data, loading, fetchMore } = useQueryGames({ variables: { limit: 15 } });

  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } });
  };

  return (
    <Layout>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading</p>
        ) : (
          <section>
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
          </section>
        )}
      </S.Main>
    </Layout>
  );
};

export default GamesScreen;
