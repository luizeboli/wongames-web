import { render, screen } from 'utils/test-utils';

import gameMock from './mock';

import GameDetails from '.';

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...gameMock} />);

    expect(screen.getByRole('heading', { name: /developer/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /release date/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /platforms/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /publisher/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    render(<GameDetails {...gameMock} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /apple/i })).toBeInTheDocument();
  });

  it('should rendser the formatted date', () => {
    render(<GameDetails {...gameMock} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    render(<GameDetails {...gameMock} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...gameMock} rating="br_18" />);

    expect(screen.getByText(/18\+/)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    render(<GameDetails {...gameMock} />);

    expect(screen.getByText(/role-playing \/ action \/ adventure/i)).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    render(<GameDetails {...gameMock} />);

    expect(screen.getByText(/publigamer/i)).toBeInTheDocument();
  });
});
