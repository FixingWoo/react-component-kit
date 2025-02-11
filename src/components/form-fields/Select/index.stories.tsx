import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Select from './index';
import Button, { ButtonVariant } from '@/components/Button';

import { daySchema } from '@/schemas';
import { DAYS } from '@/constants';

const meta: Meta<typeof Select> = {
  title: 'Components/form-fields/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    className: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const WithYupWrapper = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ICommonForm>({
    resolver: yupResolver(daySchema),
  });

  const onSubmit = (data: ICommonForm) => {
    console.log(data);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Select
        {...register('day', {
          onChange: async () => {
            await trigger();
          },
        })}
        width={'300px'}
        label={'요일'}
        placeholder={'선택해주세요.'}
        errorMessage={errors.day?.message}
      >
        {DAYS.map((day) => (
          <option key={day.value} value={day.value}>
            {day.label}
          </option>
        ))}
      </Select>
      <Button
        onClick={handleSubmit(onSubmit)}
        variant={ButtonVariant.BTN_40_PRIMARY}
      >
        Submit
      </Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    width: '300px',
    placeholder: '선택해주세요.',
    label: '레이블',
    children: (
      <>
        {DAYS.map((day) => (
          <option key={day.value} value={day.value}>
            {day.label}
          </option>
        ))}
      </>
    ),
  },
};

export const WithYup: Story = {
  render: () => <WithYupWrapper />,
};

export const WithDisabled: Story = {
  args: {
    width: '300px',
    placeholder: '선택해주세요.',
    disabled: true,
    label: '레이블',
  },
};

export const WithError: Story = {
  args: {
    width: '300px',
    placeholder: '선택해주세요.',
    errorMessage: '요일을 선택해주세요.',
    label: '레이블',
  },
};
