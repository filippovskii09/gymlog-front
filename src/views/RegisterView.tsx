import RegisterForm from '../components/auth/RegisterForm';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import AuthLayout from '../components/layouts/AuthLayout';

const RegisterView = () => {
  return (
    <AuthLayout
      title={'Create Account'}
      bottomText={
        <>
          Already have an account?
          <Link to={ROUTES.AUTH.LOGIN} className="text-acid pl-1">
            Log in
          </Link>
        </>
      }
    >
      <p className="mb-10 px-4 py-8 text-center text-xl font-bold">
        Let's Start!
      </p>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterView;
