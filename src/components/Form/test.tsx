import { renderWithTheme } from 'utils/tests/helpers';

import { FormLink, FormWrapper } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>,
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-gKAblj {
        margin: 0.8rem 0;
      }

      .c0 .sc-bdnylx {
        margin: 3.2rem auto 1.6rem;
      }

      .c0 input:-webkit-autofill,
      .c0 input:-webkit-autofill:hover,
      .c0 input:-webkit-autofill:focus,
      .c0 textarea:-webkit-autofill,
      .c0 textarea:-webkit-autofill:hover,
      .c0 textarea:-webkit-autofill:focus,
      .c0 select:-webkit-autofill,
      .c0 select:-webkit-autofill:hover,
      .c0 select:-webkit-autofill:focus {
        border: none;
        -webkit-text-fill-color: #030517;
        -webkit-box-shadow: 0 0 0px 1000px #EAEAEA inset;
      }

      .c1 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c1 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <form
            class="c0"
          >
            <div
              class="c1"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </form>
        </div>
      </body>
    `);
  });
});
