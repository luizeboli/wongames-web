import { Meta, Story } from '@storybook/react/types-6-0';

import itemsMock from './mock';

import OrdersList, { OrdersListProps } from '.';

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock,
  },
} as Meta;

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
);
