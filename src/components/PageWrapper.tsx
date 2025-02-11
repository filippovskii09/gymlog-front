import { FC, ReactNode } from 'react';
import { cn } from '../utils/cn.util';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <div className={cn('mt-10 flex h-screen flex-col', className)}>
      {children}
    </div>
  );
};

export default PageWrapper;
