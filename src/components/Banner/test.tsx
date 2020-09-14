import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'image-source',
  title: 'Game Title',
  subtitle: 'Game Subtitle',
  buttonLabel: 'Buy Now',
  buttonLink: 'buy-game',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /Game Title/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Game Subtitle/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('image')).toHaveAttribute('src', 'image-source');
    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
