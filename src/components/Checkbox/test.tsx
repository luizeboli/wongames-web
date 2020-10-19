import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    expect(screen.queryByText(/label action/i)).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(<Checkbox label="Label Action" labelFor="check" />);

    expect(screen.getByText(/label action/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck when checked status change', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Checkbox label="Label Action" labelFor="check" onCheck={onCheck} />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1));
  });
});
