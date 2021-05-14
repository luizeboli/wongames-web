import { Meta, Story } from '@storybook/react/types-6-0';

import WishlistButton, { WishlistButtonProps } from '.';

export default {
  title: 'WishlistButton',
  component: WishlistButton,
} as Meta;

export const Basic: Story<WishlistButtonProps> = (args) => <WishlistButton {...args} />;
