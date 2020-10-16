import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
};

const Checkbox = ({ label, labelFor }: CheckboxProps) => (
  <S.Container>
    <label htmlFor={labelFor}>{label}</label>
    <input id={labelFor} type="checkbox" />
  </S.Container>
);

export default Checkbox;
