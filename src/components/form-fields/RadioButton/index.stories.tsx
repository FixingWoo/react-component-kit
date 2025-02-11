import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './index';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/form-fields/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Story />
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

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
  },
};
