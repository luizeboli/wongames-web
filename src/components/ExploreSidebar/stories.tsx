import { Meta, Story } from '@storybook/react/types-6-0';

import items from './mock';

import ExploreSidebar, { ExploreSidebarProps } from '.';

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
);

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} initialValues={{ windows: true, sort_by: 'low-to-high' }} />
  </div>
);
