import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormLink, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';

import * as S from './styles';

const FormSignIn = () => (
  <FormWrapper>
    <TextField name="email" placeholder="E-mail" type="email" icon={<Email />} />
    <TextField name="password" placeholder="Password" type="password" icon={<Lock />} />

    <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

    <Button size="large" fullWidth>
      Sign In
    </Button>

    <FormLink>
      Don’t have an account?{' '}
      <Link href="/sign-up">
        <a>Sign Up!</a>
      </Link>
    </FormLink>
  </FormWrapper>
);

export default FormSignIn;
