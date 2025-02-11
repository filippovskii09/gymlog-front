import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, URLS } from '../../constants';

type RegisterRequest = {
  email: string;
  password: string;
  name: string;
};

type Response = {
  message: string;
  resetToken?: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

type ForgotPasswordRequest = {
  email: string;
};

type ResetPasswordRequest = {
  resetToken: string;
  newPassword: string;
  confirmPassword: string;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  endpoints: builder => ({
    userRegister: builder.mutation<Response, RegisterRequest>({
      query: body => ({
        url: URLS.REGISTER,
        method: 'POST',
        body,
      }),
    }),
    userLogin: builder.mutation<Response, LoginRequest>({
      query: body => ({
        url: URLS.LOGIN,
        method: 'POST',
        body,
      }),
    }),
    userForgotPassword: builder.mutation<Response, ForgotPasswordRequest>({
      query: body => ({
        url: URLS.FORGOT_PASSWORD,
        method: 'POST',
        body,
      }),
    }),
    userResetPassword: builder.mutation<Response, ResetPasswordRequest>({
      query: body => ({
        url: URLS.RESET_PASSWORD,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserForgotPasswordMutation,
  useUserResetPasswordMutation,
} = api;
