export const BUTTON_TEXTS = Object.freeze({
  AUTH: Object.freeze({
    RESET_PASSWORD: 'Reset Password',
    SIGN_UP: 'Sign Up',
    LOG_IN: 'Log In',
  }),
  CONTINUE: 'Continue',
  STATES: Object.freeze({
    DEFAULT: 'Submit',
    LOADING: 'Loading...',
    SUCCESS: 'Success!',
    ERROR: 'Error, please try again',
  }),
});

export const ROUTES = Object.freeze({
  AUTH: {
    RESET_PASSWORD: '/reset-password',
    REGISTER: '/register',
    LOGIN: '/login',
    FORGOT_PASSWORD: '/forgot-password',
  },
  USER_SET_UP: {
    GENDER: '/gender',
  },
});

export const URLS = Object.freeze({
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
});

export const baseUrl = 'http://localhost:3001/api';

export const GENDERS = Object.freeze({
  MALE: 'Male',
  FEMALE: 'Female',
});
