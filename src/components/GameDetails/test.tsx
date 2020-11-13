import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import gameMock from './mock';

import GameDetails from '.';

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...gameMock} />);

    expect(
      screen.getByRole('heading', { name: /developer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /release date/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /publisher/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /rating/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /genres/i }),
    ).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...gameMock} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /apple/i })).toBeInTheDocument();
  });

  it('should rendser the formatted date', () => {
    renderWithTheme(<GameDetails {...gameMock} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...gameMock} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...gameMock} rating="BR18" />);

    expect(screen.getByText(/18\+/)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...gameMock} />);

    expect(
      screen.getByText(/role-playing \/ action \/ adventure/i),
    ).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...gameMock} />);

    expect(screen.getByText(/publigamer/i)).toBeInTheDocument();
  });
});
