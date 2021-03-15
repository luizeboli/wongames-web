import { Meta, Story } from '@storybook/react/types-6-0';

import { CartContextData } from 'hooks/use-cart';

import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta;

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />;
  </div>
);

export const withRibbon: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />;
  </div>
);

withRibbon.args = {
  ribbon: '150% off',
  ribbonSize: 'small',
  ribbonColor: 'secondary',
};

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />;
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};
