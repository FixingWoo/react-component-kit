import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from './index';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/form-fields/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    name: 'element',
    label: '레이블',
    disabled: false,
    error: false,
  },
};

export const WithDisabled: Story = {
  args: {
    name: 'element',
    label: '레이블',
    disabled: true,
    checked: true,
  },
};

export const WithCheckedDisabled: Story = {
  args: {
    name: 'element',
    label: '레이블',
    disabled: true,
    checked: true,
  },
};
