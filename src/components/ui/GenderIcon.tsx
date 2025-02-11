import { FC } from 'react';
import { cn } from '../../utils/cn.util';

type GenderIconProps = {
  checked: boolean;
  Icon: FC;
};

const GenderIcon: FC<GenderIconProps> = ({ checked, Icon }) => {
  return (
    <div
      className={cn('transition-colors', checked ? 'text-acid' : 'text-white')}
    >
      <Icon />
    </div>
  );
};

export default GenderIcon;
