import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { useMutation } from '@apollo/client';
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormLink, FormLoading, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import { MUTATION_REGISTER } from 'graphql/mutations/register';

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: '',
  });

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onCompleted: () => {
      if (!error) {
        signIn('credentials', { email: values.email, password: values.password, callbackUrl: '/' });
      }
    },
    onError: (error) => console.log(error),
  });

  const handleInput = (inputName: string, value: string) => {
    setValues((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createUser({ variables: { input: { ...values } } });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        name="username"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="Username"
        type="text"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button type="submit" size="large" disabled={loading} fullWidth>
        {loading ? <FormLoading /> : 'Sign up now'}
      </Button>

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </FormWrapper>
  );
};

export default FormSignUp;
