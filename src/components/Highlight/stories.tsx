import { Meta, Story } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back',
    subtitle: 'Come buy this funny game',
    buttonLabel: 'Buy!',
    buttonLink: '/red-dead',
    backgroundImage: '/img/red-dead-img.jpg',
  },
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;

export const withFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

withFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
