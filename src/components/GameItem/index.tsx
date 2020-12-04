import * as S from './styles';

export type GameItemProps = {
  img: string;
  title: string;
  price: string;
};

const GameItem = ({ img, title, price }: GameItemProps) => (
  <S.Container>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Container>
);

export default GameItem;
