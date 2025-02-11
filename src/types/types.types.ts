import { ReactNode } from 'react';

export type Gender = 'Male' | 'Female';

export type GenderCheckboxProps = {
  gender: Gender;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export type GenderIconProps = {
  checked: boolean;
};

export type ChildrenProps = {
  children?: ReactNode;
};

export type ClassName = {
  className?: string;
};
