import { AddShoppingCart, RemoveShoppingCart } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { useCart } from 'hooks/use-cart';

type CartButtonProps = {
  id: string;
};

const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();

  const idIsInCart = isInCart(id);

  return (
    <Button
      icon={idIsInCart ? <RemoveShoppingCart aria-label="Remove from cart" /> : <AddShoppingCart aria-label="Add to cart" />}
      onClick={() => (idIsInCart ? removeFromCart(id) : addToCart(id))}
      size="small"
    />
  );
};

export default CartButton;
