'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.scss';

import Button, { ButtonVariant } from '@/components/Button';

import { useDialogStore } from '@/stores';

const Dialog = () => {
  const { dialog, SET_CLEAR } = useDialogStore();

  const confirm = () => {
    if (dialog.callback) {
      dialog.callback();
    }

    SET_CLEAR();
  };

  const close = () => {
    if (dialog.cancelCallback) {
      dialog.cancelCallback();
    }

    SET_CLEAR();
  };

  if (!dialog.type) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>{dialog.text}</p>
        </div>

        <div className={styles.buttonWrapper}>
          {dialog.type === 'confirm' && (
            <Button variant={ButtonVariant.BTN_32_NORMAL} onClick={close}>
              취소
            </Button>
          )}
          <Button variant={ButtonVariant.BTN_32_PRIMARY} onClick={confirm}>
            확인
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
