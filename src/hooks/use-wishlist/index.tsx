import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/client';
import { useMutation } from '@apollo/client';

import { GameCardProps } from 'components/GameCard';
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist';
import { MUTATION_CREATE_WISHLIST, MUTATION_UPDATE_WISHLIST } from 'graphql/mutations/wishlist';
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
  const [wishlistId, setWishlistId] = useState<string | undefined>();
  const [wishlist, setWishlist] = useState<QueryWishlist_wishlists_games[]>([]);

  const [createWishlist, { loading: isLoadingCreateWishlist }] = useMutation(MUTATION_CREATE_WISHLIST, {
    context: { session },
    onCompleted: (data) => {
      setWishlist(data?.createWishlist?.wishlist?.games || []);
      setWishlistId(data?.createWishlist?.wishlist?.id);
    },
  });

  const [updateWishlist, { loading: isLoadingUpdateWishlist }] = useMutation(MUTATION_UPDATE_WISHLIST, {
    context: { session },
    onCompleted: (data) => {
      setWishlist(data?.updateWishlist?.wishlist?.games || []);
    },
  });

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  });

  useEffect(() => {
    setWishlist(data?.wishlists[0]?.games || []);
    setWishlistId(data?.wishlists[0]?.id);
  }, [data]);

  const wishlistIds = useMemo(() => wishlist.map((game) => game.id), [wishlist]);

  const isInWishlist = (id: string) => wishlist?.some((game) => game.id === id);

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createWishlist({
        variables: {
          input: {
            data: {
              games: [...wishlistIds, id],
            },
          },
        },
      });
    }

    return updateWishlist({
      variables: {
        input: {
          where: { id: wishlistId },
          data: {
            games: [...wishlistIds, id],
          },
        },
      },
    });
  };

  const removeFromWishlist = (id: string) => {};

  return (
    <WishlistContext.Provider value={{ isInWishlist, addToWishlist, removeFromWishlist, loading, items: gamesMapper(wishlist) }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
