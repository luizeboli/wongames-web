import Button from 'components/Button';

import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <S.Container>
    <S.Image src={img} role="image" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Container>
);

export default Banner;
