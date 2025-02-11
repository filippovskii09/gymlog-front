import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BasicInput from '../ui/BasicInput';
import BasicButton from '../ui/BasicButton';
import { resetPasswordSchema } from '../../schemas/registerSchema';
import useButtonText from '../../hooks/useButtonText';
import { BUTTON_TEXTS, ROUTES } from '../../constants';
import { useUserResetPasswordMutation } from '../../features/api/api';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPasswordForm: FC = () => {
  const [userResetPassword, { isLoading, isSuccess, isError }] =
    useUserResetPasswordMutation();
  const navigate = useNavigate();

  const location = useLocation();
  const [resetToken, setResetToken] = useState<string | null>(null);

  const buttonText = useButtonText({
    isLoading,
    isSuccess,
    isError,
    defaultText: BUTTON_TEXTS.AUTH.RESET_PASSWORD,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setResetToken(params.get('token'));
  }, [location.search]);

  console.log(resetToken);

  const onSubmit = (data: FormValues) => {
    if (!resetToken) {
      console.error('No reset token found');
      return;
    }
    try {
      userResetPassword({
        resetToken: resetToken,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      });
      navigate(ROUTES.AUTH.LOGIN);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div
        className={'mb-10 mt-20 flex flex-col gap-5 bg-[#B3A0FF] px-10 py-8'}
      >
        <BasicInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('newPassword')}
          error={errors.newPassword?.message}
        />
        <BasicInput
          label="Confirm Password"
          type="password"
          placeholder="Enter your password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
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

export default ResetPasswordForm;
