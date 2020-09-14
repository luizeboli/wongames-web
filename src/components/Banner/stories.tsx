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

Basic.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'In the Game',
  subtitle: '<p>Your best choice</p>',
  buttonLabel: 'Buy',
  buttonLink: '#',
};

export const withRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '54rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

withRibbon.args = {
  ribbon: 'Hot Deal',
  ribbonSize: 'normal',
  ribbonColor: 'secondary',
};
