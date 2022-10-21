import { TGamesFragment, THighlightFragment, TOrderFragment, TQueryHome } from 'graphql/generated';
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

export const cartMapper = (games: TGamesFragment | null | undefined) => {
  return games
    ? games.data.map((game) => ({
        id: game.id,
        img: game.attributes.cover?.data.attributes.url,
        title: game.attributes.name,
        price: formatPrice(game.attributes.price),
      }))
    : [];
};

export const ordersMapper = (orders: TOrderFragment[] | undefined) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.attributes.card_brand,
            img: order.attributes.card_brand ? `/img/cards/${order.attributes.card_brand}.png` : null,
            number: order.attributes.card_last4 ? `**** **** **** ${order.attributes.card_last4}` : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(order.attributes.createdAt))}`,
          },
          games: order.attributes.games.data.map((game) => ({
            id: game.id,
            title: game.attributes.name,
            downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: game.attributes.cover.data.attributes.url,
            price: formatPrice(game.attributes.price),
          })),
        };
      })
    : [];
};
