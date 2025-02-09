import React from 'react';
import cn from 'classnames';

import Error from '@/components/Message/Error';
import styles from './style.module.scss';

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, IProps>(
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
    const id = React.useId();

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}

        <textarea
          id={id}
          style={
            {
              width,
              height,
            } as React.CSSProperties
          }
          className={cn(
            styles.textarea,
            {
              [styles.error]: errorMessage,
            },
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        ></textarea>

        <div className={styles.helpWrapper}>
          {errorMessage && <Error message={errorMessage} />}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
