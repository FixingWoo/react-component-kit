import React, { SelectHTMLAttributes } from 'react';
import cn from 'classnames';

import Error from '@/components/Message/Error';
import styles from './style.module.scss';

export enum SelectSize {
  SIZE_32 = '32',
  SIZE_40 = '40',
  SIZE_48 = '48',
  SIZE_56 = '56',
}

interface IProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  width?: string;
  placeholder?: string;
  size?: SelectSize;
  errorMessage?: string;
  label: string;
}

const Select = React.forwardRef<HTMLSelectElement, IProps>(
  (
    {
      width,
      placeholder,
      size = SelectSize.SIZE_48,
      className,
      children,
      errorMessage,
      label,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();

    return (
      <div className={styles.selectWrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <select
          id={inputId}
          className={cn(
            styles.select,
            {
              [styles.size32]: size === SelectSize.SIZE_32,
              [styles.size40]: size === SelectSize.SIZE_40,
              [styles.size48]: size === SelectSize.SIZE_48,
              [styles.size56]: size === SelectSize.SIZE_56,
              [styles.error]: errorMessage,
            },
            className
          )}
          style={
            {
              '--width': width,
            } as React.CSSProperties
          }
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option selected disabled value={''}>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        {errorMessage && <Error message={errorMessage} />}
      </div>
    );
  }
);

// React.forwardRef로 정의된 컴포넌트는 기본적으로 이름이 자동으로 할당되지 않기 때문에 정의
Select.displayName = 'Select';

export default Select;
