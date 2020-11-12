import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

export const Container = styled.div`
  ${({ theme: { colors, spacings, font } }) => css`
    position: relative;

    background: ${colors.white};
    padding: ${spacings.small};

    ${RibbonStyles.Container} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      ${RibbonStyles.Container} {
        right: ${spacings.small};
        top: ${spacings.small};
        font-size: ${font.sizes.large};

        &:before {
          border: none;
        }
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme: { colors, font, spacings } }) => css`
    font-size: ${font.sizes.small};
    color: ${colors.gray};
    margin-bottom: ${spacings.small};

    ${media.greaterThan('medium')`
        max-width: 77rem;
      `}
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme: { spacings } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`;
