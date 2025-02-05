import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/form-fields/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: '레이블',
    type: 'text',
    placeholder: '내용을 입력해주세요.',
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    label: '레이블',
    type: 'text',
    placeholder: '내용을 입력해주세요.',
    errorMessage: '필수 입력 값 입니다.',
  },
};

export const Disabled: Story = {
  args: {
    label: '레이블',
    type: 'text',
    placeholder: '내용을 입력해주세요.',
    disabled: true,
  },
};
