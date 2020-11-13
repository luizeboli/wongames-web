import { Apple, Linux, Windows } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';

type Platform = 'windows' | 'linux' | 'apple';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  releaseDate: string;
  developer: string;
  publisher: string;
  platforms: Platform[];
  rating: Rating;
  genres: string[];
};

const platformsIcons = {
  linux: <Linux title="Linux" size={18} />,
  windows: <Windows title="Windows" size={18} />,
  apple: <Apple title="Apple" size={18} />,
};

const ratings = {
  BR0: 'FREE',
  BR10: '10+',
  BR12: '12+',
  BR14: '14+',
  BR16: '16+',
  BR18: '18+',
};

const GameDetails = ({
  releaseDate,
  developer,
  publisher,
  platforms,
  rating,
  genres,
}: GameDetailsProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game Details
      </Heading>
    </MediaMatch>

    <S.Container>
      <S.Block>
        <S.Title>Developer</S.Title>
        <S.Description>{developer}</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Release Date</S.Title>
        <S.Description>
          {new Intl.DateTimeFormat('en-us', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }).format(new Date(releaseDate))}
        </S.Description>
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
        <S.Description>{publisher}</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Rating</S.Title>
        <S.Description>{ratings[rating]}</S.Description>
      </S.Block>

      <S.Block>
        <S.Title>Genres</S.Title>
        <S.Description>{genres.join(' / ')}</S.Description>
      </S.Block>
    </S.Container>
  </S.Wrapper>
);

export default GameDetails;
