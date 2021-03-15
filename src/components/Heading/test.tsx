import { render, screen } from 'utils/test-utils';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    // Render the component
    render(<Heading>Won Games Title</Heading>);

    // Select element to be tested
    // Assert
    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Won Games Title</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games Title</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      'padding-left': '0.8rem',
      'border-left': '0.7rem solid #F231A5',
    });
  });

  it('should render a heading with a bottom line', () => {
    render(<Heading lineBottom>Won Games Title</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a small sized heading', () => {
    render(<Heading size="small">Won Games Title</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyleRule('width', '3rem', {
      modifier: '::after',
    });
  });

  it('should render a huge sized heading', () => {
    render(<Heading size="huge">Won Games Title</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      'font-size': '5.2rem',
    });
  });

  it('should render a heading with a primary color bottom line', () => {
    render(
      <Heading lineColor="primary" lineBottom lineLeft>
        Won Games Title
      </Heading>,
    );

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      'padding-left': '0.8rem',
      'border-left': '0.7rem solid #F231A5',
    });
    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a heading with a secondary color bottom line', () => {
    render(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Won Games Title
      </Heading>,
    );

    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyle({
      'padding-left': '0.8rem',
      'border-left': '0.7rem solid #3CD3C1',
    });
    expect(screen.getByRole('heading', { name: /Won Games Title/i })).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
