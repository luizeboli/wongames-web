import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';

import filterItemsMock from 'components/ExploreSidebar/mock';
import { QUERY_GAMES } from 'graphql/queries/games';
import { renderWithTheme } from 'utils/tests/helpers';

import Games from '.';

jest.mock('screens/Layout', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
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
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 },
            },
            result: {
              data: {
                games: [
                  {
                    name: 'RimWorld',
                    slug: 'rimworld',
                    cover: {
                      url: '/uploads/rimworld_8e93acc963.jpg',
                    },
                    developers: [{ name: 'Ludeon Studios' }],
                    price: 65.99,
                    __typename: 'Game',
                  },
                ],
              },
            },
          },
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument();

    expect(await screen.findByText(/rimworld/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument();
  });
});
