import userEvent from '@testing-library/user-event';

import { render, screen } from 'utils/test-utils';

import 'server.mock';

import FormForgotPassword from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const query = { email: '' };

useRouter.mockImplementation(() => ({
  query,
}));

describe.skip('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument();
  });

  it('should validate the email', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'valid@email.com');

    userEvent.click(screen.getByRole('button', { name: /send email/i }));

    expect(await screen.findByText(/you just received an email/i)).toBeInTheDocument();
  });

  it('should show invalid email error', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid.com');

    userEvent.click(screen.getByRole('button', { name: /send email/i }));

    expect(await screen.findByText(/must be a valid email/i)).toBeInTheDocument();
  });

  it.skip('should show an unknown email error', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'false@email.com');

    userEvent.click(screen.getByRole('button', { name: /send email/i }));

    expect(await screen.findByText(/this email does not exists/i)).toBeInTheDocument();
  });

  it('should autofill e-mail if redirected from logged in user', () => {
    query.email = 'valid@email.com';
    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com');
  });
});
