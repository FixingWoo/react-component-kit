import React from 'react';

import Icon, { IconName } from '@/components/Icon';
import styles from './style.module.scss';

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  message: string;
}

const Error: React.FC<IProps> = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <Icon name={IconName.ERROR} width={16} />
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default Error;
