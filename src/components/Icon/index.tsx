import React, { CSSProperties, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

import Smile from '@/assets/icons/icon_smile.svg';
import Error from '@/assets/icons/icon_error.svg';

export enum IconName {
  SMILE = 'smile',
  ERROR = 'error',
}

const ICONS: { [key in IconName]: React.ReactNode } = {
  [IconName.SMILE]: <Smile />,
  [IconName.ERROR]: <Error />,
};

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  width?: number;
  height?: number;
  size?: number;
  strokeColor?: string;
  fillColor?: string;
  className?: string;
  style?: CSSProperties;
}

const Icon: React.FC<IProps> = ({
  name,
  width,
  height,
  size,
  className,
  strokeColor,
  fillColor,
  style,
  ...props
}) => {
  return (
    <span
      className={cn(
        styles.icon,
        {
          [styles.strokeColor]: strokeColor,
          [styles.fillColor]: fillColor,
        },
        className
      )}
      style={
        {
          '--icon-width': `${width || size}px`,
          '--icon-height': `${height || size}px`,
          '--icon-stroke-color': strokeColor,
          '--icon-fill-color': fillColor,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {ICONS[name]}
    </span>
  );
};

export default Icon;
