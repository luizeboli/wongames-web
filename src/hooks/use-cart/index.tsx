import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useQueryGames } from 'graphql/queries/games';
import formatPrice from 'utils/formatPrice';
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
  quantity: number;
  total: string;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
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

  const totalPrice =
    data?.games.reduce((acc, game) => {
      return acc + game.price;
    }, 0) || 0;

  return (
    <CartContext.Provider value={{ items: cartMapper(data?.games), quantity: cartItems.length, total: formatPrice(totalPrice) }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
