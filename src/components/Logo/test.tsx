import { render, screen } from 'utils/test-utils';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // Render the component
    render(<Logo />);

    // Select element to be tested
    // Assert
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render the logo with id passed', () => {
    const { container } = render(<Logo id="myId" />);

    expect(container.querySelector('#paint0_linear_myId')).toBeInTheDocument();
  });

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a normal logo when size is default', () => {
    render(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a bigger logo', () => {
    render(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a bigger logo without text and with pointer-events none on SVG if hideOnMobile is true', () => {
    render(<Logo hideTextOnMobile />);

    const containerElement = screen.getByLabelText(/Won Games/i).parentElement;

    expect(containerElement).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)',
    });

    expect(containerElement).toHaveStyleRule('pointer-events', 'none', {
      media: '(max-width: 768px)',
      modifier: '> svg',
    });
  });
});
