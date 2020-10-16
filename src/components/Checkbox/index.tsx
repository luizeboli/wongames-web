import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
};

const Checkbox = ({ label, labelFor, labelColor = 'white' }: CheckboxProps) => (
  <S.Container>
    {!!label && (
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
    <input id={labelFor} type="checkbox" />
  </S.Container>
);

export default Checkbox;
