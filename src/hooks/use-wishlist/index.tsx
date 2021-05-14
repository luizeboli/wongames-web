import { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';

import { GameCardProps } from 'components/GameCard';
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist';
import { useQueryWishlist } from 'graphql/queries/wishlist';
import { gamesMapper } from 'utils/mappers';

export type WishlistContextData = {
  items: GameCardProps[];
  isInWishlist: (id: string) => boolean;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  loading: boolean;
};

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false,
};

export const WishlistContext = createContext<WishlistContextData>(WishlistContextDefaultValues);

export type WishlistProviderProps = {
  children: React.ReactNode;
};

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession();
  const [wishlist, setWishlist] = useState<QueryWishlist_wishlists_games[]>([]);

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  });

  useEffect(() => {
    setWishlist(data?.wishlists[0]?.games || []);
  }, [data]);

  const isInWishlist = (id: string) => wishlist?.some((game) => game.id === id);

  const addToWishlist = (id: string) => {};
  const removeFromWishlist = (id: string) => {};

  return (
    <WishlistContext.Provider value={{ isInWishlist, addToWishlist, removeFromWishlist, loading, items: gamesMapper(wishlist) }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
