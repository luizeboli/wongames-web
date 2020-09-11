import { Meta, Story } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

export const Basic: Story = (args) => <Button {...args} />;

export const withIcon: Story = (args) => <Button {...args} />;

export const asLink: Story = (args) => <Button {...args} />;

Basic.args = {
  children: 'Buy Now',
};

withIcon.args = {
  children: 'Buy Now',
  icon: <AddShoppingCart />,
};

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/link',
};
