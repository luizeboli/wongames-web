import { Meta, Story } from '@storybook/react/types-6-0';

import mockGame from './mock';

import GameDetails, { GameDetailsProps } from '.';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mockGame,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'apple'],
      },
    },
    releaseDate: {
      control: {
        type: 'date',
      },
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['action', 'role-playing', 'adventure'],
      },
    },
  },
} as Meta;

export const Basic: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
