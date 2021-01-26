import { forwardRef } from 'react';
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
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.ContainerProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    minimal = false,
    ...restProps
  },
  ref,
) => (
  <S.Container
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...restProps}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Container>
);

export default forwardRef(Button);
