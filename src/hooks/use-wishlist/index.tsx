import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/client';

import { GameCardProps } from 'components/GameCard';
import { TGamesFragment, useMutationCreateWishlist, useMutationUpdateWishlist, useQueryWishlist } from 'graphql/generated';
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
  const [wishlist, setWishlist] = useState<TGamesFragment | null | undefined>({ data: [] });

  const [createWishlist, { loading: isLoadingCreateWishlist }] = useMutationCreateWishlist({
    context: { session },
    onCompleted: (data) => {
      setWishlist(data.createWishlist?.data?.attributes?.games);
      setWishlistId(data.createWishlist?.data?.id);
    },
  });

  const [updateWishlist, { loading: isLoadingUpdateWishlist }] = useMutationUpdateWishlist({
    context: { session },
    onCompleted: (data) => {
      setWishlist(data.updateWishlist?.data?.attributes?.games);
    },
  });

  const { data, loading: loadingWishlist } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
  });

  useEffect(() => {
    if (data?.me?.wishlists?.data.length) {
      setWishlist(data.me.wishlists.data[0].attributes.games);
      setWishlistId(data.me.wishlists.data[0].id);
    }
  }, [data]);

  const wishlistGamesIds = useMemo(() => wishlist?.data.map((wish) => wish.id) ?? [], [wishlist]);

  const isInWishlist = (id: string) => wishlist?.data.some((game) => game.id === id) ?? false;

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createWishlist({
        variables: {
          input: {
            games: [id],
            user: session?.id as string,
          },
        },
      });
    }
    return updateWishlist({
      variables: {
        id: wishlistId,
        input: {
          games: [...wishlistGamesIds, id],
        },
      },
    });
  };

  const removeFromWishlist = (id: string) => {
    if (!wishlistId) return;

    return updateWishlist({
      variables: {
        id: wishlistId,
        input: {
          games: wishlistGamesIds.filter((gameId) => gameId !== id),
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
        items: wishlist?.data.length ? gamesMapper(wishlist) : [],
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;
