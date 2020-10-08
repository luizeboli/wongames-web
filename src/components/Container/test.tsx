import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import { Container } from '.';

describe('<Container />', () => {
  it('should ', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(NaN);
        padding-right: calc(NaN);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `);
  });
});
