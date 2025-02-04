import React, { createElement, ElementType, MouseEventHandler } from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

export enum ButtonVariant {
  BTN_48_NORMAL = 'btn-48-normal',
  BTN_48_PRIMARY = 'btn-48-primary',
  BTN_48_SECONDARY = 'btn-48-secondary',
  BTN_40_NORMAL = 'btn-40-normal',
  BTN_40_PRIMARY = 'btn-40-primary',
  BTN_40_SECONDARY = 'btn-40-secondary',
  BTN_32_NORMAL = 'btn-32-normal',
  BTN_32_PRIMARY = 'btn-32-primary',
  BTN_32_SECONDARY = 'btn-32-secondary',
  CUSTOM = 'custom',
}

interface IProps<T extends ElementType = 'button'> {
  as?: T;
  type?: 'button';
  className?: string;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<T>;
  href?: string;
  width?: string;
  height?: string;
  size?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  as = 'button',
  type = 'button',
  className,
  variant,
  onClick,
  width,
  height,
  size,
  disabled,
  children,
  ...props
}) => {
  const _className = cn(
    {
      [styles.button]: variant !== ButtonVariant.CUSTOM,
      [styles.btn48Normal]: variant === ButtonVariant.BTN_48_NORMAL,
      [styles.btn48Primary]: variant === ButtonVariant.BTN_48_PRIMARY,
      [styles.btn48Secondary]: variant === ButtonVariant.BTN_48_SECONDARY,
      [styles.btn40Normal]: variant === ButtonVariant.BTN_40_NORMAL,
      [styles.btn40Primary]: variant === ButtonVariant.BTN_40_PRIMARY,
      [styles.btn40Secondary]: variant === ButtonVariant.BTN_40_SECONDARY,
      [styles.btn32Normal]: variant === ButtonVariant.BTN_32_NORMAL,
      [styles.btn32Primary]: variant === ButtonVariant.BTN_32_PRIMARY,
      [styles.btn32Secondary]: variant === ButtonVariant.BTN_32_SECONDARY,
    },
    className
  );

  const style = {
    '--width': width || size,
    '--height': height || size,
  } as React.CSSProperties;

  return createElement(
    as,
    {
      className: _className,
      style,
      type,
      onClick,
      disabled,
      ...props,
    },
    children
  );
};

export default Button;
