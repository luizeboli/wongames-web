import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useQueryGames } from 'graphql/queries/games';
import formatPrice from 'utils/formatPrice';
import { getStorageItem, setStorageItem } from 'utils/localStorage';
import { cartMapper } from 'utils/mappers';

const CART_KEY = 'cartItems';

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
  isInCart: (id: string) => boolean;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  loading: boolean;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
};

export const CartContext = createContext<CartContextData>(CartContextDefaultValues);

export type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  useEffect(() => {
    setStorageItem(CART_KEY, cartItems);
  }, [cartItems]);

  const { data, loading } = useQueryGames({
    skip: !cartItems.length,
    variables: {
      where: { id: cartItems },
    },
  });

  const totalPrice =
    data?.games.reduce((acc, game) => {
      return acc + game.price;
    }, 0) || 0;

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false);

  const addToCart = (id: string) => {
    const newCartItems = [...cartItems, id];
    setCartItems(newCartItems);
  };

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((cartId) => cartId !== id);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(totalPrice),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
