import { render, screen } from '@testing-library/react';

import MediaMatch from '.';

describe('<MediaMatch />', () => {
  let desktopElement: Element;
  let mobileElement: Element;

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop element</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile element</h1>
        </MediaMatch>
      </>,
    );

    desktopElement = screen.getByTestId('desktop');
    mobileElement = screen.getByTestId('mobile');
  });

  it('should be display: none if no media query is passed', () => {
    expect(desktopElement.parentElement).toHaveStyleRule('display', 'none');
    expect(mobileElement.parentElement).toHaveStyleRule('display', 'none');
  });

  it('should show or hide based on media passed', () => {
    expect(desktopElement.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)',
    });

    expect(mobileElement.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)',
    });
  });
});
