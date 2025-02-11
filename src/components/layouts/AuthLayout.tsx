import { FC, ReactNode } from 'react';
import BackButton from '../ui/BackButton';
import PageWrapper from '../PageWrapper';
import AuthTitle from '../auth/AuthTitle';

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
  bottomText?: ReactNode; // Для нижнього тексту з посиланням
};

const AuthLayout: FC<AuthLayoutProps> = ({ title, children, bottomText }) => {
  return (
    <PageWrapper>
      <div>
        <div className="relative flex flex-wrap items-center px-4">
          <BackButton />
          <AuthTitle titleText={title} />
        </div>
        {children}
      </div>
      {bottomText && (
        <p className="px-4 py-7 text-center text-base">{bottomText}</p>
      )}
    </PageWrapper>
  );
};

export default AuthLayout;
