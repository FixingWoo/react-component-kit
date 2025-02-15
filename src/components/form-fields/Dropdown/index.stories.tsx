import type { Meta, StoryObj } from '@storybook/react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Dropdown from './index';

import { daySchema } from '@/schemas';
import { DAYS } from '@/constants';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/form-fields/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    className: { control: 'text' },
    errorMessage: { control: 'text' },
    options: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const FormWrapper = () => {
  const {
    trigger,
    formState: { errors },
    control,
    setValue,
  } = useForm<ICommonForm>({
    resolver: yupResolver(daySchema),
  });

  return (
    <Controller
      control={control}
      name={'day'}
      rules={{ required: true }}
      render={({ field: { value } }) => {
        const handleChange = async (value: string) => {
          setValue('day', value);
          await trigger();
        };

        return (
          <Dropdown
            options={DAYS}
            allText={'선택'}
            value={value}
            onChange={handleChange}
            errorMessage={errors.day?.message}
          />
        );
      }}
    />
  );
};

export const Default: Story = {
  render: () => <FormWrapper />,
};
