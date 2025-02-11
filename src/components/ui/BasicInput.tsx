import { forwardRef, InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import ShowPasswordEye from './ShowPasswordEye';
import InputLabel from './InputLabel';

type InputProps = {
  label: string;
  error?: string;
  type?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const BasicInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, type = 'text', ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
      <div className={`relative w-full text-[16px] font-medium ${className}`}>
        <InputLabel name={rest?.name} label={label} />

        <div className={'relative'}>
          <input
            ref={ref}
            type={isPassword ? (showPassword ? 'text' : 'password') : type}
            className={classNames(
              'box-border w-full rounded-2xl border bg-white p-2.5 pl-4 text-black',
              error ? 'border-red-500' : 'border-gray-300',
              'focus:outline-[#896CFE]'
            )}
            {...rest}
          />
          {isPassword && (
            <ShowPasswordEye
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

BasicInput.displayName = 'BasicInput';

export default BasicInput;
