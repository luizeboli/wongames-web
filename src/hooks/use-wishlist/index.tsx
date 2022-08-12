import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/client';

import { GameCardProps } from 'components/GameCard';
import { TQueryWishlist, useMutationCreateWishlist, useMutationUpdateWishlist, useQueryWishlist } from 'graphql/generated';
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
  const [wishlist, setWishlist] = useState<TQueryWishlist[]>([]);

  const [createWishlist, { loading: isLoadingCreateWishlist }] = useMutationCreateWishlist({
    context: { session },
    onCompleted: (data) => {
      setWishlist(data.createWishlist?.data?.attributes?.games || []);
      setWishlistId(data.createWishlist?.data?.id);
    },
  });

  const [updateWishlist, { loading: isLoadingUpdateWishlist }] = useMutationUpdateWishlist({
    context: { session },
    onCompleted: (data) => {
      setWishlist(data.updateWishlist?.data?.attributes?.games || []);
    },
  });

  const { data, loading: loadingWishlist } = useQueryWishlist({
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

  const removeFromWishlist = (id: string) => {
    return updateWishlist({
      variables: {
        input: {
          where: {
            id: wishlistId,
          },
          data: {
            games: wishlistIds.filter((gameId) => gameId !== id),
          },
        },
      },
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingWishlist || isLoadingCreateWishlist || isLoadingUpdateWishlist,
        items: gamesMapper(wishlist),
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
