import { createContext, ReactNode, useContext } from 'react';

export type CartContextData = {};

export const CartContextDefaultValues = {};

export const CartContext = createContext<CartContextData, CartContextDefaultValues>();

export type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
