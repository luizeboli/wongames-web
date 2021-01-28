import { Meta, Story } from '@storybook/react/types-6-0';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Showcase, { ShowcaseProps } from '.';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Basic.args = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const withoutTitle: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

withoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock,
};

export const withoutHighlight: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Basic.args = {
  title: 'Most popular',
  games: gamesMock,
};

export const withoutGames: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

withoutGames.args = {
  title: 'Most popular',
  highlight: highlightMock,
};
