import RegisterView from '../views/RegisterView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ForgotPasswordView from '../views/ForgotPasswordView';
import ResetPasswordView from '../views/ResetPasswordView';
import GenderView from '../views/setup-views/GenderView';
import SetupView from '../views/setup-views/SetupView';
import GoalView from '../views/setup-views/GoalView';
import ActivityView from '../views/setup-views/ActivityView';

export const pagesData = [
  {
    path: '/',
    element: <HomeView />,
    title: 'home',
  },
  {
    path: '/register',
    element: <RegisterView />,
    title: 'register',
  },
  {
    path: '/login',
    element: <LoginView />,
    title: 'login',
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordView />,
    title: 'forgot-password',
  },
  {
    path: '/reset-password',
    element: <ResetPasswordView />,
    title: 'reset-password',
  },
  {
    path: '/gender',
    element: <GenderView />,
    title: 'gender',
  },
  {
    path: '/setup',
    element: <SetupView />,
    title: 'setup',
  },
  {
    path: '/goal',
    element: <GoalView />,
    title: 'goal',
  },
  {
    path: '/activity',
    element: <ActivityView />,
    title: 'activity',
  },
];
