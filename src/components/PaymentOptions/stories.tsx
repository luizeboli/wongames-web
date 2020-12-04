import { Meta, Story } from '@storybook/react/types-6-0';

import cardsMock from './mock';

import PaymentOptions, { PaymentOptionsProps } from '.';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
} as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
);
