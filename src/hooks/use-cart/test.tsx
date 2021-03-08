import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';

import { setStorageItem } from 'utils/localStorage';

import { cartItems, gamesMock } from './mock';

import { CartProvider, CartProviderProps, useCart } from '.';

describe('useCart', () => {
  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    setStorageItem('cartItems', ['1', '2']);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), { wrapper });

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual(cartItems);
  });
});
