import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import TextField from 'components/TextField';

import * as S from './styles';

const FormSignIn = () => (
  <S.Container>
    <form>
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign In
      </Button>

      <S.FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign Up!</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Container>
);

export default FormSignIn;
