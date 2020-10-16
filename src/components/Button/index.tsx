import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  minimal = false,
  ...restProps
}: ButtonProps) => (
  <S.Container
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...restProps}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Container>
);

export default Button;
