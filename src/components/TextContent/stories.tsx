import { Meta, Story } from '@storybook/react/types-6-0';

import textMock from './mock';

import TextContent, { TextContentProps } from '.';

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
);
