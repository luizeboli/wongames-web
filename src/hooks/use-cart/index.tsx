import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getStorageItem } from 'utils/localStorage';

export type CartContextData = {
  items: string[];
};

export const CartContextDefaultValues = {
  items: [],
};

export const CartContext = createContext<CartContextData>(CartContextDefaultValues);

export type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem('cartItems');

    if (data) {
      setCartItems(data);
    }
  }, []);

  return <CartContext.Provider value={{ items: cartItems }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
