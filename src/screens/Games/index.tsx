import Layout from 'screens/Layout';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as S from './styles';

export type GamesScreenProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesScreen = ({ filterItems, games = [] }: GamesScreenProps) => {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Layout>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Layout>
  );
};

export default GamesScreen;
