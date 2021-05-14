import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';

import Button, { ButtonProps } from 'components/Button';
import Spinner from 'components/Spinner';
import { useWishlist } from 'hooks/use-wishlist';

export type WishlistButtonProps = {
  gameId: string;
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

const WishlistButton = ({ gameId, hasText = false, size = 'small' }: WishlistButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist();
  const [session] = useSession();
  const idIsInWishlist = isInWishlist(gameId);

  const handleClick = async () => {
    setLoading(true);
    idIsInWishlist ? await removeFromWishlist(gameId) : await addToWishlist(gameId);
    setLoading(false);
  };

  const buttonText = idIsInWishlist ? 'Remove from wishlist' : 'Add to wishlist';

  if (!session) return null;

  return (
    <Button
      onClick={handleClick}
      icon={loading ? <Spinner /> : idIsInWishlist ? <Favorite aria-label={buttonText} /> : <FavoriteBorder aria-label={buttonText} />}
      minimal
      size={size}
    >
      {hasText && buttonText}
    </Button>
  );
};

export default WishlistButton;
