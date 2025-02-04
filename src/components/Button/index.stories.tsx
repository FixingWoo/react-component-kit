import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonVariant } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(ButtonVariant),
    },
    children: {
      control: 'text',
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BTN_48_NORMAL: Story = {
  args: {
    variant: ButtonVariant.BTN_48_NORMAL,
    children: '버튼',
  },
};

export const BTN_40_NORMAL: Story = {
  args: {
    variant: ButtonVariant.BTN_40_NORMAL,
    children: '버튼',
  },
};

export const BTN_32_NORMAL: Story = {
  args: {
    variant: ButtonVariant.BTN_32_NORMAL,
    children: '버튼',
  },
};

export const BTN_48_PRIMARY: Story = {
  args: {
    variant: ButtonVariant.BTN_48_PRIMARY,
    children: '버튼',
  },
};

export const BTN_40_PRIMARY: Story = {
  args: {
    variant: ButtonVariant.BTN_40_PRIMARY,
    children: '버튼',
  },
};
export const BTN_32_PRIMARY: Story = {
  args: {
    variant: ButtonVariant.BTN_32_PRIMARY,
    children: '버튼',
  },
};

export const BTN_48_SECONDARY: Story = {
  args: {
    variant: ButtonVariant.BTN_48_SECONDARY,
    children: '버튼',
  },
};

export const BTN_40_SECONDARY: Story = {
  args: {
    variant: ButtonVariant.BTN_40_SECONDARY,
    children: '버튼',
  },
};

export const BTN_32_SECONDARY: Story = {
  args: {
    variant: ButtonVariant.BTN_32_SECONDARY,
    children: '버튼',
  },
};
