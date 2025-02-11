import { FC } from 'react';
import { useNavigate } from 'react-router';
import { BackArrowIcon } from '../icons/BackArrowIcon';
import { ChildrenProps } from '../../types/types.types';

const BackButton: FC<ChildrenProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <button className={'flex items-center gap-2'} onClick={() => navigate(-1)}>
      <BackArrowIcon />
      {children}
    </button>
  );
};

export default BackButton;
