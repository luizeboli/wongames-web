import userEvent from '@testing-library/user-event';

import { CartContextDefaultValues } from 'hooks/use-cart';
import { render, screen } from 'utils/test-utils';

import CartButton from '.';

describe.skip('<CartButton />', () => {
  it('should render button with add icon and call add method', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn(),
    };

    render(<CartButton id="1" />, { cartProviderProps });

    const button = screen.getByLabelText(/add to cart/i);

    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1');
  });

  it('should render button with remove icon and call remove method', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn(),
    };

    render(<CartButton id="2" />, { cartProviderProps });

    const button = screen.getByLabelText(/remove from cart/i);

    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('2');
  });
});
