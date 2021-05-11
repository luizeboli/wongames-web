import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { Email, ErrorOutline, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormLink, FormLoading, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';
import { FieldErrors, signInValidate } from 'utils/validations';

import * as S from './styles';

const FormSignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleInput = (inputName: string, value: string) => {
    setValues((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setIsLoading(false);
      return;
    }

    setFieldError({});

    const result = await signIn('credentials', { ...values, redirect: false, callbackUrl: '/' });

    if (result?.url) {
      return router.push(result.url);
    }

    setFormError('username or password is invalid');
    setIsLoading(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {!!formError && (
        <S.FormError>
          <ErrorOutline />
          {formError}
        </S.FormError>
      )}
      <TextField
        name="email"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="E-mail"
        type="email"
        icon={<Email />}
        error={fieldError?.email}
      />
      <TextField
        name="password"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="Password"
        type="password"
        icon={<Lock />}
        error={fieldError?.password}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button type="submit" size="large" disabled={isLoading} fullWidth>
        {isLoading ? <FormLoading /> : 'Sign In'}
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
