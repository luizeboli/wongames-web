import { render, screen } from 'utils/test-utils';

import 'matchMediaMock';

import Profile from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' })),
}));

jest.mock('screens/Layout', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>;
  },
}));

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />;
  },
}));

describe('<Profile />', () => {
  describe('<Profile />', () => {
    it('should render the heading', () => {
      render(<Profile>Lorem Ipsum</Profile>);

      expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
      expect(screen.getByText('My profile')).toBeInTheDocument();
      expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument();
    });
  });
});
