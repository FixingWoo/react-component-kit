import React from 'react';
import cn from 'classnames';

import Error from '@/components/Message/Error';
import styles from './style.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      width = '320px',
      height = '56px',
      label,
      errorMessage,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();

    return (
      <div className={cn(styles.wrapper, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <input
          id={inputId}
          style={
            {
              width,
              height,
            } as React.CSSProperties
          }
          className={cn(
            styles.input,
            {
              [styles.error]: errorMessage,
            },
            className
          )}
          autoComplete={'false'}
          disabled={disabled}
          ref={ref}
          {...props}
        />

        {errorMessage && <Error message={errorMessage} />}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
