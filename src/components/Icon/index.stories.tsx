import type { Meta, StoryObj } from '@storybook/react';

import Icon, { IconName } from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.values(IconName),
    },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Smile: Story = {
  args: {
    name: IconName.SMILE,
  },
};
