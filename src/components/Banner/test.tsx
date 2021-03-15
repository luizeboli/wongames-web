import { render, screen } from 'utils/test-utils';

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
    const { container } = render(<Banner {...props} />);

    expect(screen.getByRole('heading', { name: /Game Title/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Game Subtitle/i })).toBeInTheDocument();
    expect(screen.getByRole('image')).toHaveAttribute('src', 'image-source');
    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    render(<Banner {...props} ribbon="Hot Deal" ribbonSize="small" ribbonColor="secondary" />);

    const ribbon = screen.getByText(/Hot Deal/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
