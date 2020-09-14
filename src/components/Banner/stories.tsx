import { Meta, Story } from '@storybook/react/types-6-0';

import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />;
