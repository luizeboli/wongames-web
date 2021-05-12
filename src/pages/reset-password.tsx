import FormResetPassword from 'components/FormResetPassword';
import Auth from 'screens/Auth';

export default function ResetPassword() {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  );
}
