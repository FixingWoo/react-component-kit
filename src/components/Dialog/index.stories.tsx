import type { Meta, StoryObj } from '@storybook/react';

import Dialog from './index';
import Button, { ButtonVariant } from '@/components/Button';

import { useDialogStore } from '@/stores';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { OPEN_ALERT } = useDialogStore();

    return (
      <div>
        <Button
          variant={ButtonVariant.BTN_32_NORMAL}
          width={'100px'}
          onClick={() => OPEN_ALERT('아이디를 입력하세요')}
        >
          OPEN
        </Button>
        <Dialog />
      </div>
    );
  },
};
