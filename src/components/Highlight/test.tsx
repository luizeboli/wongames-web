import { render, screen } from 'utils/test-utils';

import * as S from './styles';

import Highlight from '.';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/buy-now',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('<Highlight />', () => {
  it('should render correctly', () => {
    const { container } = render(<Highlight {...props} />);

    expect(screen.getByRole('heading', { name: /Heading 1/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Heading 2/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render background image', () => {
    render(<Highlight {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', '/img/red-dead-img.jpg');
  });

  it('should render float image', () => {
    render(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getAllByRole('img', { name: props.title })[1]).toHaveAttribute('src', '/float-image.png');
  });

  it('should render a float image aligned on left by default', () => {
    const { container } = render(<Highlight {...props} floatImage="/float-image.png" />);

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatimage container'");

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Container}`,
    });
  });

  it('should render a float image aligned on right', () => {
    const { container } = render(<Highlight {...props} floatImage="/float-image.png" alignment="left" />);

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'container floatimage'");

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Container}`,
    });
  });
});
