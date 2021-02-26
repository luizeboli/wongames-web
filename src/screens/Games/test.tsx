import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import filterItemsMock from 'components/ExploreSidebar/mock';
import apolloCache from 'utils/apolloCache';
import { renderWithTheme } from 'utils/tests/helpers';

import { fetchMoreMock, gamesMock } from './mock';

import Games from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
  prefetch: () => new Promise(() => null),
}));

jest.mock('screens/Layout', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    // Explore Sidebar
    expect(await screen.findByText(/price/i)).toBeInTheDocument();

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument();

    expect(await screen.findByRole('button', { name: /show more/i })).toBeInTheDocument();
  });

  it('should render more games when show more button is clicked', async () => {
    renderWithTheme(
      // Should pass mocks data in the same order as requests are done
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument();
  });

  it('should push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }));
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }));
    userEvent.click(await screen.findByLabelText(/low to high/i));

    expect(push).toHaveBeenLastCalledWith({ pathname: '/games', query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' } });
  });

  it('should render empty when no games found', async () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(await screen.findByText(/we didn't find any games with this filter/i)).toBeInTheDocument();
  });
});
