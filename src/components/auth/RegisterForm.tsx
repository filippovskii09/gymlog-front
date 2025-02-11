import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BasicInput from '../ui/BasicInput';
import BasicButton from '../ui/BasicButton';
import { registerSchema } from '../../schemas/registerSchema';
import useButtonText from '../../hooks/useButtonText';
import { BUTTON_TEXTS, ROUTES } from '../../constants';
import { useUserRegisterMutation } from '../../features/api/api';
import { useNavigate } from 'react-router';

type FormValues = {
  email: string;
  name: string;
  password: string;
};

const RegisterForm: FC = () => {
  const [userRegister, { isLoading, isSuccess, isError }] =
    useUserRegisterMutation();
  const navigate = useNavigate();

  const buttonText = useButtonText({
    isLoading,
    isSuccess,
    isError,
    defaultText: BUTTON_TEXTS.AUTH.SIGN_UP,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await userRegister({
        email: data.email,
        name: data.name,
        password: data.password,
      }).unwrap();

      navigate(ROUTES.AUTH.LOGIN);
    } catch (error) {
      console.error(error);
    }
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
          label="Name"
          type="text"
          placeholder="Enter your name"
          {...register('name')}
          error={errors.name?.message}
        />
        <BasicInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          error={errors.password?.message}
        />
      </div>

      <BasicButton
        buttonText={buttonText}
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default RegisterForm;
