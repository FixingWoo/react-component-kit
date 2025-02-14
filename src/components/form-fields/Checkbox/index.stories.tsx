import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/form-fields/CheckBox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

// 스토리 정의 타입
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: '레이블',
    disabled: false,
  },
};
