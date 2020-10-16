import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Label Action" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/label action/i)).toBeInTheDocument();
    expect(screen.getByText(/label action/i)).toHaveAttribute('for', 'check');
  });

  it('should render without a label', () => {
    renderWithTheme(<Checkbox />);
    expect(screen.getByText(/label action/i)).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(<Checkbox label="Label Action" labelFor="check" />);

    expect(screen.getByText(/label action/i)).toHaveStyle({
      color: '#030517',
    });
  });
});
