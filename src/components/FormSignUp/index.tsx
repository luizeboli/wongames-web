import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { AccountCircle, Email, ErrorOutline, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';
import { TUsersPermissionsRegisterInput, useMutationRegister } from 'graphql/generated';
import { FieldErrors, signUpValidate } from 'utils/validations';

const FormSignUp = () => {
  const [values, setValues] = useState<TUsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: '',
  });
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');

  const [createUser, { error, loading }] = useMutationRegister({
    onCompleted: () => {
      if (!error) {
        signIn('credentials', { email: values.email, password: values.password, callbackUrl: '/' });
      }
    },
    onError: (error) => {
      setFormError(error?.graphQLErrors[0]?.extensions?.exception?.data?.message[0].messages[0].message);
    },
  });

  const handleInput = (inputName: string, value: string) => {
    setValues((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const errors = signUpValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      return;
    }

    setFieldError({});

    createUser({ variables: { input: { username: values.username, email: values.email, password: values.password } } });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <TextField
        name="username"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="Username"
        type="text"
        icon={<AccountCircle />}
        error={fieldError?.username}
      />
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
      <TextField
        name="confirm_password"
        onInputChange={(event, value) => handleInput(event.target.name, value)}
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
        error={fieldError?.confirm_password}
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
