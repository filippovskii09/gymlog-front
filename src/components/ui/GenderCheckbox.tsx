import { FC } from 'react';
import { cn } from '../../utils/cn.util';
import { ChildrenProps, GenderCheckboxProps } from '../../types/types.types';

export const GenderCheckbox: FC<GenderCheckboxProps & ChildrenProps> = ({
  gender,
  children,
  checked,
  onChange,
}) => {
  return (
    <div className={'flex flex-col items-center gap-2.5 text-center'}>
      <div
        className={cn(
          'relative flex h-[163px] w-[163px] items-center justify-center rounded-full',
          checked ? 'bg-acid border-none' : 'border border-white bg-[#373737]'
        )}
      >
        <input
          className="absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0"
          type="checkbox"
          name={gender}
          checked={checked}
          onChange={e => onChange?.(e.target.checked)}
        />
        {children}
      </div>
      <p className={'text-xl font-bold'}>{gender}</p>
    </div>
  );
};
