import { Meta, Story } from '@storybook/react/types-6-0';

import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '15rem',
      position: 'relative',
      backgroundColor: '#888',
    }}
  >
    <Ribbon {...args} />
  </div>
);

Basic.args = {
  children: 'Hot Deal',
};
