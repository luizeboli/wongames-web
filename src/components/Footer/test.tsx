import { render, screen } from 'utils/test-utils';

import Footer from '.';

describe('<Footer />', () => {
  it('should render 4 columns', () => {
    const { container } = render(<Footer />);

    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Follow Us/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Location/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
