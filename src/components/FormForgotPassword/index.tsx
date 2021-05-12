import { useState } from 'react';
import { useRouter } from 'next/router';
import { CheckCircleOutline, Email, ErrorOutline } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormError, FormLoading, FormSuccess, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';
import { FieldErrors, forgotPasswordValidate } from 'utils/validations';

const FormForgotPassword = () => {
  const { query } = useRouter();
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ email: (query?.email as string) || '' });
  const [loading, setLoading] = useState(false);

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    console.log('submit');
    event.preventDefault();
    setLoading(true);

    const errors = forgotPasswordValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    setLoading(false);

    if (data.error) {
      setFormError(data.message[0].messages[0].message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline /> {formError}
            </FormError>
          )}
          <TextField
            name="email"
            placeholder="Email"
            type="text"
            error={fieldError?.email}
            onInputChange={(_, v) => handleInput('email', v)}
            icon={<Email />}
            initialValue={values.email}
          />

          <Button type="submit" size="large" fullWidth disabled={loading}>
            {loading ? <FormLoading /> : <span>Send email</span>}
          </Button>
        </>
      )}
    </FormWrapper>
  );
};

export default FormForgotPassword;
