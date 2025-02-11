import ResetPasswordForm from '../components/auth/ResetPasswordForm';
import AuthLayout from '../components/layouts/AuthLayout';

const RegisterView = () => {
  return (
    <AuthLayout title={'Set Password'}>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default RegisterView;
