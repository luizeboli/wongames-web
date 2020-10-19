import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type ContainerProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      height: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      background: none;
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: none;
    border-radius: ${theme.border.radius};
    text-decoration: none;

    :hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && containerModifiers[size](theme)}
    ${fullWidth && containerModifiers.fullWidth()}
    ${hasIcon && containerModifiers.withIcon(theme)}
    ${minimal && containerModifiers.minimal(theme)}
  `}
`;
