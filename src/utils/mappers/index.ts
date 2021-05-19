import { QueryGames_games } from 'graphql/generated/QueryGames';
import { QueryHome_banners, QueryHome_sections_freeGames_highlight } from 'graphql/generated/QueryHome';
import { QueryOrders_orders } from 'graphql/generated/QueryOrders';
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist';
import formatPrice from 'utils/formatPrice';

export const bannersMapper = (banners: QueryHome_banners[]) =>
  banners.map((banner) => ({
    img: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size,
    }),
  }));

export const gamesMapper = (games?: QueryGames_games[] | null | undefined) =>
  games?.length
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        cover: game.cover?.url,
        ...(!!game.developers.length && {
          developer: game.developers[0].name,
        }),
        img: game.cover?.url,
        price: game.price,
      }))
    : [];

export const highlightMapper = (hightlight: QueryHome_sections_freeGames_highlight | null | undefined) =>
  hightlight
    ? {
        title: hightlight.title,
        subtitle: hightlight.subtitle,
        backgroundImage: hightlight.background?.url,
        floatImage: hightlight.floatImage?.url,
        buttonLabel: hightlight.buttonLabel,
        buttonLink: hightlight.buttonLink,
        alignment: hightlight.alignment,
      }
    : {};

export const cartMapper = (games: QueryGames_games[] | QueryWishlist_wishlists_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: game.cover?.url,
        title: game.name,
        price: formatPrice(game.price),
      }))
    : [];
};

export const ordersMapper = (orders: QueryOrders_orders[]) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4 ? `**** **** **** ${order.card_last4}` : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(order.created_at))}`,
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: game.cover?.url,
            price: formatPrice(game.price),
          })),
        };
      })
    : [];
};
