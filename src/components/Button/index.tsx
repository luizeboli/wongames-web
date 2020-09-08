import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...restProps
}: ButtonProps) => (
  <S.Container
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...restProps}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Container>
);

export default Button;
