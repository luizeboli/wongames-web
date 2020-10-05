import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Button from 'components/Button';

import * as S from './styles';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
};

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
}: GameCardProps) => (
  <S.Container>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist" />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Container>
);

export default GameCard;
