import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const RadioGroup = React.forwardRef<HTMLInputElement, IProps>(
  ({ label, error, className, disabled = false, ...props }, ref) => {
    return (
      <label
        className={cn(
          styles.radioButtonWrapper,
          {
            [styles.error]: error,
            [styles.disabled]: disabled,
          },
          className
        )}
      >
        <input
          className={styles.input}
          type="radio"
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {label}
      </label>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
