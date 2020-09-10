import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

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
      'border-left': '0.7rem solid #F231A5',
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

  it('should render a small sized heading', () => {
    renderWithTheme(<Heading size="small">Won Games Title</Heading>);

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after',
    });
  });

  it('should render a heading with a primary color bottom line', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineBottom lineLeft>
        Won Games Title
      </Heading>,
    );

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyle({
      'padding-left': '0.8rem',
      'border-left': '0.7rem solid #F231A5',
    });
    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a heading with a secondary color bottom line', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Won Games Title
      </Heading>,
    );

    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyle({
      'padding-left': '0.8rem',
      'border-left': '0.7rem solid #3CD3C1',
    });
    expect(
      screen.getByRole('heading', { name: /Won Games Title/i }),
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
