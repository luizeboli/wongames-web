import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormLink, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';

import * as S from './styles';

const FormSignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleInput = (inputName: string, value: string) => {
    setValues((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', { ...values, redirect: false, callbackUrl: '/' });

    if (result?.url) {
      return router.push(result.url);
    }

    console.error('erro');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        name="email"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button type="submit" size="large" fullWidth>
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
};

export default FormSignIn;
