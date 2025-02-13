import { create } from 'zustand';

interface DialogState {
  dialog: {
    type: 'alert' | 'confirm' | null;
    text: string | null;
    callback?: () => void;
    cancelCallback?: () => void;
  };
  OPEN_ALERT: (text: string, callback?: () => void) => void;
  OPEN_CONFIRM: (
    text: string,
    callback?: () => void,
    cancelCallback?: () => void
  ) => void;
  SET_CLEAR: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  dialog: {
    type: null,
    text: null,
    callback: undefined,
    cancelCallback: undefined,
  },
  OPEN_ALERT: (text, callback) =>
    set({
      dialog: {
        type: 'alert',
        text,
        callback,
        cancelCallback: undefined,
      },
    }),
  OPEN_CONFIRM: (text, callback, cancelCallback) =>
    set({
      dialog: {
        type: 'confirm',
        text,
        callback,
        cancelCallback,
      },
    }),
  SET_CLEAR: () =>
    set({
      dialog: {
        type: null,
        text: null,
        callback: undefined,
        cancelCallback: undefined,
      },
    }),
}));
