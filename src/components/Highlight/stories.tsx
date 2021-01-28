import { Meta, Story } from '@storybook/react/types-6-0';

import item from './mock';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    ...item,
  },
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;

export const withFloatImage: Story<HighlightProps> = (args) => <Highlight {...args} />;

withFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
