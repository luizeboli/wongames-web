import Image from 'next/image';

import Button from 'components/Button';

import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};

const Highlight = ({ title, subtitle, buttonLabel, buttonLink, backgroundImage, floatImage, alignment = 'right' }: HighlightProps) => (
  <S.Wrapper alignment={alignment} data-cy="highlight">
    <Image src={backgroundImage} alt={title} layout="fill" objectFit="cover" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} width={400} height={300} objectFit="contain" />
      </S.FloatImageWrapper>
    )}
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Container>
  </S.Wrapper>
);

export default Highlight;
