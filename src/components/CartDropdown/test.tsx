import items from 'components/CartList/mock';
import { CartContextDefaultValues } from 'hooks/use-cart';
import { render, screen } from 'utils/test-utils';

import CartDropdown from '.';

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: items.length },
    });

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it('should render Dropdown content with cart items and total', () => {
    render(<CartDropdown />, { cartProviderProps: { ...CartContextDefaultValues, items, total: 'R$ 430,00' } });

    expect(screen.getByText('R$ 430,00')).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
