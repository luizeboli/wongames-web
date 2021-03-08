import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useQueryGames } from 'graphql/queries/games';
import { getStorageItem } from 'utils/localStorage';
import { cartMapper } from 'utils/mappers';

type CartItem = {
  id: string;
  img: string | undefined;
  title: string;
  price: string;
};

export type CartContextData = {
  items: CartItem[];
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

  const { data } = useQueryGames({
    skip: !cartItems.length,
    variables: {
      where: { id: cartItems },
    },
  });

  return <CartContext.Provider value={{ items: cartMapper(data?.games) }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
