import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BasicInput from '../ui/BasicInput';
import BasicButton from '../ui/BasicButton';
import { forgotPasswordSchema } from '../../schemas/registerSchema';
import useButtonText from '../../hooks/useButtonText';
import { BUTTON_TEXTS, ROUTES } from '../../constants';
import { useUserForgotPasswordMutation } from '../../features/api/api';
import { useNavigate } from 'react-router';

type FormValues = {
  email: string;
};

const ForgotPasswordForm: FC = () => {
  const [userForgotPassword, { isLoading, isSuccess, isError }] =
    useUserForgotPasswordMutation();
  const navigate = useNavigate();

  const buttonText = useButtonText({
    isLoading,
    isSuccess,
    isError,
    defaultText: BUTTON_TEXTS.CONTINUE,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await userForgotPassword({
        email: data.email,
      }).unwrap();

      navigate(`${ROUTES.AUTH.RESET_PASSWORD}?token=${response.resetToken}`);
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
      </div>

      <BasicButton
        buttonText={buttonText}
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default ForgotPasswordForm;
