import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
  lineColor?: LineColors;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary',
}: HeadingProps) => (
  <S.Container
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Container>
);

export default Heading;
