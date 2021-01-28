import Link from 'next/link';
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormLink, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';

const FormSignUp = () => (
  <FormWrapper>
    <TextField name="name" placeholder="Name" type="name" icon={<AccountCircle />} />
    <TextField name="email" placeholder="E-mail" type="email" icon={<Email />} />
    <TextField name="password" placeholder="Password" type="password" icon={<Lock />} />
    <TextField name="confirm-password" placeholder="Confirm password" type="password" icon={<Lock />} />

    <Button size="large" fullWidth>
      Sign up now
    </Button>

    <FormLink>
      Already have an account?{' '}
      <Link href="/sign-in">
        <a>Sign in</a>
      </Link>
    </FormLink>
  </FormWrapper>
);

export default FormSignUp;
