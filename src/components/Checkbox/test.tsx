import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from 'utils/test-utils';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    render(<Checkbox label="Label Action" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/label action/i)).toBeInTheDocument();
    expect(screen.getByText(/label action/i)).toHaveAttribute('for', 'check');
  });

  it('should render without a label', () => {
    render(<Checkbox />);
    expect(screen.queryByText(/label action/i)).not.toBeInTheDocument();
  });

  it('should render with white label', () => {
    render(<Checkbox label="Label Action" labelFor="check" />);

    expect(screen.getByText(/label action/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should dispatch onCheck when checked status change', async () => {
    const onCheck = jest.fn();
    render(<Checkbox label="Label Action" labelFor="check" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1));
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when checked status change even if isChecked is passed', async () => {
    const onCheck = jest.fn();
    render(<Checkbox label="Label Action" labelFor="check" onCheck={onCheck} isChecked />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1));
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with TAB', () => {
    render(<Checkbox label="Checkbox" labelFor="checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
