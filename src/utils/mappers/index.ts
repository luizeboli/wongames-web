import { TGamesFragment, THighlightFragment, TQueryHome } from 'graphql/generated';
import formatPrice from 'utils/formatPrice';

export const bannersMapper = (banners: TQueryHome['banners']) =>
  banners?.data.map((banner) => ({
    img: banner.attributes?.image.data?.attributes?.url,
    title: banner.attributes?.title,
    subtitle: banner.attributes?.subtitle,
    buttonLabel: banner.attributes?.button?.label,
    buttonLink: banner.attributes?.button?.link,
    ...(banner.attributes?.ribbon && {
      ribbon: banner.attributes.ribbon.text,
      ribbonColor: banner.attributes.ribbon.color,
      ribbonSize: banner.attributes.ribbon.size,
    }),
  }));

export const gamesMapper = (games: TGamesFragment | null | undefined) =>
  games?.data.length
    ? games.data.map((game) => ({
        id: game.id,
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        cover: game.attributes?.cover?.data?.attributes?.url,
        ...(!!game.attributes?.developers?.data.length && {
          developer: game.attributes.developers.data[0].attributes?.name,
        }),
        img: game.attributes?.cover?.data?.attributes?.url,
        price: game.attributes?.price,
      }))
    : [];

export const highlightMapper = (hightlight: THighlightFragment | null | undefined) =>
  hightlight
    ? {
        title: hightlight.title,
        subtitle: hightlight.subtitle,
        backgroundImage: hightlight.background?.data?.attributes?.url,
        floatImage: hightlight.floatImage?.data?.attributes?.url ?? '',
        buttonLabel: hightlight.buttonLabel,
        buttonLink: hightlight.buttonLink,
        alignment: hightlight.alignment,
      }
    : null;

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
