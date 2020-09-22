import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage container';
    grid-template-columns: 1.3fr 2fr;

    ${Container} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'container floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Container} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: flex-end;
    }
  `,
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    display: grid;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${wrapperModifiers[alignment!]()}

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: container;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    align-self: flex-end;
    z-index: ${theme.layers.base};

    max-height: 23rem;
    max-width: 100%;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`;
