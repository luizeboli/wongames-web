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

  it('should render with white label', () => {
    renderWithTheme(<Checkbox label="Label Action" labelFor="check" />);

    expect(screen.getByText(/label action/i)).toHaveStyle({
      color: '#FAFAFA',
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
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when checked status change even if isChecked is passed', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Checkbox
        label="Label Action"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1));
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with TAB', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
