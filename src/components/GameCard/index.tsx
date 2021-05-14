import Link from 'next/link';

import CartButton from 'components/CartButton';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import WishlistButton from 'components/WishlistButton';
import formatPrice from 'utils/formatPrice';

import * as S from './styles';

export type GameCardProps = {
  id: string;
  title: string;
  slug: string;
  developer?: string;
  img?: string;
  price: number;
  promotionalPrice?: number;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const GameCard = ({
  id,
  title,
  slug,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GameCardProps) => (
  <S.Container>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton>
        <WishlistButton gameId={id} />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{formatPrice(price)}</S.Price>}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Container>
);

export default GameCard;
