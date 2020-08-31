import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    // Render the component
    renderWithTheme(<Heading>Won Games Title</Heading>);

    // Select element to be tested
    // Assert
    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games Title</Heading>);

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games Title</Heading>);

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyle({
      'padding-left': '0.8rem',
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  it('should render a heading with a bottom line', () => {
    renderWithTheme(<Heading lineBottom>Won Games Title</Heading>);

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });
});
