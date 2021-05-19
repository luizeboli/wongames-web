import { QueryGames_games } from 'graphql/generated/QueryGames';
import { QueryHome_banners, QueryHome_sections_newGames_highlight } from 'graphql/generated/QueryHome';
import { QueryOrders_orders } from 'graphql/generated/QueryOrders';

import { bannersMapper, cartMapper, gamesMapper, highlightMapper, ordersMapper } from '.';

describe('bannersMapper', () => {
  it('should return the right shape when mapped', () => {
    const banner = {
      image: {
        url: '/img/random.png',
      },
      title: 'Banner Title',
      subtitle: 'Banner Subtitle',
      button: {
        label: 'Banner Button',
        link: 'https://link.com',
      },
      ribbon: {
        text: 'Banner Ribbon',
        color: 'primary',
        size: 'normal',
      },
    } as QueryHome_banners;

    expect(bannersMapper([banner])).toStrictEqual([
      {
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ribbon: banner.ribbon?.text,
        ribbonColor: banner.ribbon?.color,
        ribbonSize: banner.ribbon?.size,
      },
    ]);
  });
});

describe('gamesMapper', () => {
  it('should return an empty array if no games passed', () => {
    expect(gamesMapper(null)).toStrictEqual([]);
  }),
    it('should return the right shape when mapped', () => {
      const game = {
        id: '1',
        name: 'Game Name',
        developers: [
          {
            name: 'Developer',
          },
        ],
        slug: 'game-name',
        cover: {
          url: '/game.png',
        },
        price: 10,
      } as QueryGames_games;

      expect(gamesMapper([game])).toStrictEqual([
        {
          id: game.id,
          title: game.name,
          slug: game.slug,
          cover: game.cover?.url,
          developer: game.developers[0].name,
          img: game.cover?.url,
          price: game.price,
        },
      ]);
    });
});

describe('highlightMapper()', () => {
  it('should return empty object if no highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({});
  });

  it('should return mapped highlight', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: '/image.jpg',
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: {
        url: '/image.jpg',
      },
    } as QueryHome_sections_newGames_highlight;

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      backgroundImage: '/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: '/image.jpg',
    });
  });
});

describe('cartMapper', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([]);
  });

  it('should return mapped items', () => {
    const game = {
      id: '1',
      cover: {
        url: '/image.jpg',
      },
      name: 'game',
      price: 10,
    } as QueryGames_games;

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: '/image.jpg',
        title: 'game',
        price: '$10.00',
      },
    ]);
  });
});

describe('ordersMapper()', () => {
  it('should return empty array if no orders', () => {
    expect(cartMapper(undefined)).toStrictEqual([]);
  });

  it('should return mapped items', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer',
              },
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg',
            },
            price: 10,
          },
        ],
      },
    ] as QueryOrders_orders[];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00',
          },
        ],
      },
    ]);
  });

  it('should return free game when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer',
              },
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg',
            },
            price: 0,
          },
        ],
      },
    ] as QueryOrders_orders[];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$0.00',
          },
        ],
      },
    ]);
  });
});
