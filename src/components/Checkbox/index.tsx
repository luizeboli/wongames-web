import { InputHTMLAttributes, useState } from 'react';

import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor,
  labelColor = 'black',
  onCheck,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked },
    } = event;

    setChecked(checked);

    if (onCheck) {
      onCheck(checked);
    }
  };

  return (
    <S.Container>
      <S.Input
        id={labelFor}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Container>
  );
};
export default Checkbox;
