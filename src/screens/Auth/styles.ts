import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme: { colors, spacings } }) => css`
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;
    padding: ${spacings.xxlarge} ${spacings.xxlarge} ${spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const BannerContent = styled.div`
  ${({ theme: { colors, layers } }) => css`
    position: relative;
    z-index: ${layers.base};
    color: ${colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme: { font, colors, spacings } }) => css`
    font-size: ${font.sizes.xxlarge};
    font-weight: ${font.light};
    margin-top: ${spacings.xxsmall};

    > strong {
      color: ${colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme: { font } }) => css`
    align-self: end;
    font-size: ${font.sizes.xsmall};
    text-align: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme: { spacings } }) => css`
    max-width: 36rem;

    ${LogoStyles.Container} {
      margin 0 auto ${spacings.xxlarge};
    }

    ${HeadingStyles.Container} {
      margin-bottom ${spacings.medium};
    }
  `}
`;
