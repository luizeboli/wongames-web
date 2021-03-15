import { AddShoppingCart, RemoveShoppingCart } from '@styled-icons/material-outlined';

import Button, { ButtonProps } from 'components/Button';
import { useCart } from 'hooks/use-cart';

type CartButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

const CartButton = ({ id, size = 'small', hasText = false }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const idIsInCart = isInCart(id);

  const buttonText = idIsInCart ? 'Remove from cart' : 'Add to cart';

  return (
    <Button
      icon={idIsInCart ? <RemoveShoppingCart aria-label="Remove from cart" /> : <AddShoppingCart aria-label="Add to cart" />}
      onClick={() => (idIsInCart ? removeFromCart(id) : addToCart(id))}
      size={size}
    >
      {!!hasText && buttonText}
    </Button>
  );
};

export default CartButton;
