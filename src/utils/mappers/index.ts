import { QueryGames_games } from 'graphql/generated/QueryGames';
import { QueryHome_banners, QueryHome_sections_freeGames_highlight } from 'graphql/generated/QueryHome';

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
