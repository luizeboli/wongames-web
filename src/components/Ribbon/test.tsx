import { render, screen } from 'utils/test-utils';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    render(<Ribbon>Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toBeInTheDocument();
  });

  it('should render with primary color by default', () => {
    render(<Ribbon>Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      backgroundColor: '#f231a5',
    });
  });

  it('should render with secondary color', () => {
    render(<Ribbon color="secondary">Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
  });

  it('should render the normal size by default', () => {
    render(<Ribbon>Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });
  });

  it('should render the small size', () => {
    render(<Ribbon size="small">Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
