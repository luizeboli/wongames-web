import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import Empty from 'components/Empty';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';
import Heading from 'components/Heading';
import { HighlightProps } from 'components/Highlight';
import Loader from 'components/Loader';
import Showcase from 'components/Showcase';
import { useWishlist } from 'hooks/use-wishlist';
import Layout from 'screens/Layout';

import * as S from './styles';

export type WishlistScreenProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
  recommendedTitle: string;
};

const Wishlist = ({ recommendedGames, recommendedHighlight, recommendedTitle }: WishlistScreenProps) => {
  const { items, loading } = useWishlist();

  return (
    <Layout>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.LoaderWrapper>
            <Loader />
          </S.LoaderWrapper>
        ) : items.length ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty title="Your wishlist is empty" description="Games added to your wishlist will appear here" hasLink />
        )}

        <Divider />
      </Container>

      <Showcase title={recommendedTitle} games={recommendedGames} highlight={recommendedHighlight} />
    </Layout>
  );
};
export default Wishlist;
