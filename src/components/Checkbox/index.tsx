import { InputHTMLAttributes, useState } from 'react';

import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, labelFor, labelColor = 'white', onCheck, isChecked = false, value, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked || false);

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
      <S.Input id={labelFor} type="checkbox" checked={checked} onChange={handleChange} value={value} {...props} />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Container>
  );
};
export default Checkbox;
