import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BasicInput from '../ui/BasicInput';
import BasicButton from '../ui/BasicButton';
import { loginSchema } from '../../schemas/registerSchema';
import useButtonText from '../../hooks/useButtonText';
import { BUTTON_TEXTS, ROUTES } from '../../constants';
import { useUserLoginMutation } from '../../features/api/api';
import { Link } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const [userLogin, { isLoading, isSuccess, isError }] = useUserLoginMutation();

  const buttonText = useButtonText({
    isLoading,
    isSuccess,
    isError,
    defaultText: BUTTON_TEXTS.AUTH.LOG_IN,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    userLogin({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className={'mb-10 flex flex-col gap-5 bg-[#B3A0FF] px-10 py-8'}>
        <BasicInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          error={errors.email?.message}
        />
        <BasicInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          error={errors.password?.message}
        />
        <Link className={'text-right'} to={ROUTES.AUTH.FORGOT_PASSWORD}>
          Forgot Password?
        </Link>
      </div>

      <BasicButton
        buttonText={buttonText}
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default LoginForm;
