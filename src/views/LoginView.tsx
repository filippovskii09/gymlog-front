import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import LoginForm from '../components/auth/LoginForm';
import AuthLayout from '../components/layouts/AuthLayout';

const LoginView = () => {
  return (
    <AuthLayout
      title="Log In"
      bottomText={
        <>
          Don’t have an account?
          <Link to={ROUTES.AUTH.REGISTER} className="text-acid pl-1">
            Sign Up
          </Link>
        </>
      }
    >
      <p className={'mb-10 px-4 py-8 text-center text-xl font-bold'}>
        Welcome!
      </p>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginView;
