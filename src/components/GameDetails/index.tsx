import { Apple, Linux, Windows } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';

type Platform = 'windows' | 'linux' | 'apple';

export type GameDetailsProps = {
  platforms: Platform[];
};

const platformsIcons = {
  linux: <Linux title="Linux" size={18} />,
  windows: <Windows title="Windows" size={18} />,
  apple: <Apple title="Apple" size={18} />,
};

const GameDetails = ({ platforms }: GameDetailsProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game Details
      </Heading>
    </MediaMatch>

    <S.Container>
      <S.Block>
        <S.Title>Developer</S.Title>
        <S.Description>Gearbox</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Release Date</S.Title>
        <S.Description>Nov</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Platforms</S.Title>
        <S.IconsWrapper>
          {platforms.map((platform: Platform) => (
            <S.Icon key={platform}>{platformsIcons[platform]}</S.Icon>
          ))}
        </S.IconsWrapper>
      </S.Block>

      <S.Block>
        <S.Title>Publisher</S.Title>
        <S.Description>Nov</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Rating</S.Title>
        <S.Description>Nov</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Genres</S.Title>
        <S.Description>Nov</S.Description>
      </S.Block>
    </S.Container>
  </S.Wrapper>
);

export default GameDetails;
