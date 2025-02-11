import { FC } from 'react';
import { ClassName } from '../../types/types.types';
import { cn } from '../../utils/cn.util';

type Props = ClassName & {
  title: string;
};

const Subtitle: FC<Props> = ({ title, className }) => {
  return <h2 className={cn('text-xl font-bold', className)}>{title}</h2>;
};

export default Subtitle;
