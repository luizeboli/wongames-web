import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';

import { act, waitFor } from 'utils/test-utils';

import { createWishlistMock, updateWishlistMock, wishlistMappedGames, wishlistMock } from './mock';

import WishlistProvider, { useWishlist } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
const session = { jwt: '123', user: { email: 'test@email.com' } };
useSession.mockImplementation(() => [session]);

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), { wrapper });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([wishlistMappedGames[0], wishlistMappedGames[1]]);
  });

  it('should check if game is in wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), { wrapper });

    await waitForNextUpdate();

    expect(result.current.isInWishlist('1')).toBe(true);
    expect(result.current.isInWishlist('2')).toBe(true);
    expect(result.current.isInWishlist('5')).toBe(false);
  });

  it('should add item in wishlist creating a new list if not existent', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[createWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), { wrapper });

    act(() => {
      result.current.addToWishlist('3');
    });

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([wishlistMappedGames[2]]);
  });

  it('should add item in wishlist that already exists', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, updateWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), { wrapper });

    await waitForNextUpdate();

    act(() => {
      result.current.addToWishlist('3');
    });

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistMappedGames);
    });
  });
});
