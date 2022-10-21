import { Meta, Story } from '@storybook/react/types-6-0';

import items from './mock';

import CartList from '.';

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items,
    total: 'R$ 330,00',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);

Default.args = {
  total: 'R$330,00',
  cartContextValue: { items },
};

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
);

Default.args = {
  total: 'R$330,00',
  cartContextValue: { items },
};

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
);
