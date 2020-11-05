import { darken } from 'polished';
import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';
import * as TextFieldStyles from 'components/TextField/styles';

export const FormWrapper = styled.form`
  ${({ theme: { colors, spacings } }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${spacings.xxsmall} 0;
    }
    ${ButtonStyles.Container} {
      margin: ${spacings.medium} auto ${spacings.xsmall};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: ${colors.black};
      -webkit-box-shadow: 0 0 0px 1000px ${colors.lightGray} inset;
    }
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;