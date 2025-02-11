import { FC, memo, useCallback } from 'react';
import CheckedIcon from '../icons/CheckedIcon';
import { cn } from '../../utils/cn.util';
import { ChildrenProps } from '../../types/types.types';
import Subtitle from './Subtitle';

type UniversalCheckboxProps = ChildrenProps & {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  type?: 'checkbox' | 'radio';
  containerClassName?: string;
  textClassName?: string;
  iconClassName?: string;
};

const CustomCheckbox: FC<UniversalCheckboxProps> = memo(
  ({
    label,
    checked,
    onChange,
    type = 'radio',
    containerClassName = '',
    textClassName = '',
    iconClassName = '',
    children,
  }) => {
    const handleClick = useCallback(() => {
      onChange(!checked);
    }, [checked, onChange]);

    return (
      <button
        type="button"
        className={cn(
          'flex w-full max-w-[323px] items-center justify-between transition-all',
          containerClassName
        )}
        role={type}
        aria-checked={checked}
        onClick={handleClick}
      >
        {children || <Subtitle className={textClassName} title={label} />}

        {iconClassName &&
          (checked ? (
            <CheckedIcon className={cn(iconClassName)} />
          ) : (
            <div
              className={cn(
                'h-[34px] w-[34px] rounded-full border-[3px] border-black bg-transparent',
                iconClassName
              )}
            ></div>
          ))}
      </button>
    );
  }
);

export default CustomCheckbox;
