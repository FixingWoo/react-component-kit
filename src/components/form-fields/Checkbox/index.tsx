import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

import Icon, { IconName } from '@/components/Icon';

interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const CheckBox = React.forwardRef<HTMLInputElement, ICheckBoxProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={styles.checkBoxWrapper}>
        <label
          className={cn(
            styles.label,
            {
              [styles.error]: error,
            },
            className
          )}
        >
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type={'checkbox'}
              ref={ref}
              {...props}
            />
            <Icon className={styles.checkIcon} name={IconName.CHECK} />
          </div>
          {label}
        </label>
      </div>
    );
  }
);

CheckBox.displayName = 'CheckBox';

export default CheckBox;
