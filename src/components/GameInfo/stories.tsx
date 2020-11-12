import { Meta, Story } from '@storybook/react/types-6-0';

import gameMock from './mock';

import GameInfo, { GameInfoProps } from '.';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: gameMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);
