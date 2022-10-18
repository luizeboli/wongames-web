import { TGamesFragment, THighlightFragment, TOrderFragment, TQueryHome } from 'graphql/generated';

import { bannersMapper, cartMapper, gamesMapper, highlightMapper, ordersMapper } from '.';

describe('bannersMapper', () => {
  it('should return the right shape when mapped', () => {
    const banner = {
      data: [
        {
          attributes: {
            image: {
              data: {
                attributes: {
                  url: '/img/random.png',
                },
              },
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
          },
        },
      ],
    } as TQueryHome['banners'];

    expect(bannersMapper(banner)).toStrictEqual([
      {
        img: banner?.data[0].attributes.image?.data.attributes.url,
        title: banner?.data[0].attributes.title,
        subtitle: banner?.data[0].attributes.subtitle,
        buttonLabel: banner?.data[0].attributes.button?.label,
        buttonLink: banner?.data[0].attributes.button?.link,
        ribbon: banner?.data[0].attributes.ribbon?.text,
        ribbonColor: banner?.data[0].attributes.ribbon?.color,
        ribbonSize: banner?.data[0].attributes.ribbon?.size,
      },
    ]);
  });
});

describe('gamesMapper', () => {
  it('should return an empty array if no games passed', () => {
    expect(gamesMapper(null)).toStrictEqual([]);
  });

  it('should return the right shape when mapped', () => {
    const game = {
      data: [
        {
          id: '1',
          attributes: {
            name: 'Game Name',
            slug: 'game-name',
            developers: {
              data: [
                {
                  attributes: {
                    name: 'Developer Name',
                  },
                },
              ],
            },

            cover: {
              data: {
                attributes: {
                  url: '/game.png',
                },
              },
            },
            price: 10,
          },
        },
      ],
    } as TGamesFragment;

    expect(gamesMapper(game)).toStrictEqual([
      {
        id: game.data[0].id,
        title: game.data[0].attributes.name,
        slug: game.data[0].attributes.slug,
        cover: game.data[0].attributes.cover?.data.attributes.url,
        developer: game.data[0].attributes.developers.data[0].attributes.name,
        img: game.data[0].attributes.cover?.data.attributes.url,
        price: game.data[0].attributes.price,
      },
    ]);
  });
});

describe('highlightMapper()', () => {
  it('should return null if no highlight', () => {
    expect(highlightMapper(null)).toBeNull();
  });

  it('should return mapped highlight', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        data: {
          attributes: {
            url: '/image.jpg',
          },
        },
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: {
        data: {
          attributes: {
            url: '/image.jpg',
          },
        },
      },
    } as THighlightFragment;

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
      data: [
        {
          id: '1',
          attributes: {
            cover: {
              data: {
                attributes: {
                  url: '/image.jpg',
                },
              },
            },
            name: 'game',
            price: 10,
          },
        },
      ],
    } as TGamesFragment;

    expect(cartMapper(game)).toStrictEqual([
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
        id: '1',
        attributes: {
          card_brand: 'visa',
          card_last4: '4242',
          createdAt: '2021-04-14T18:41:48.358Z',
          games: {
            data: [
              {
                id: '1',
                attributes: {
                  name: 'game',
                  developers: {
                    data: [
                      {
                        attributes: {
                          name: 'developer',
                        },
                      },
                    ],
                  },
                  slug: 'game',
                  cover: {
                    data: {
                      attributes: {
                        url: '/image.jpg',
                      },
                    },
                  },
                  price: 10,
                },
              },
            ],
          },
        },
      },
    ] as TOrderFragment[];

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
            img: '/image.jpg',
            price: '$10.00',
          },
        ],
      },
    ]);
  });

  it('should return free game when its free', () => {
    const orders = [
      {
        id: '1',
        attributes: {
          createdAt: '2021-04-14T18:41:48.358Z',
          games: {
            data: [
              {
                id: '1',
                attributes: {
                  name: 'game',
                  developers: {
                    data: [
                      {
                        attributes: {
                          name: 'developer',
                        },
                      },
                    ],
                  },
                  slug: 'game',
                  cover: {
                    data: {
                      attributes: {
                        url: '/image.jpg',
                      },
                    },
                  },
                  price: 0,
                },
              },
            ],
          },
        },
      },
    ] as TOrderFragment[];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: undefined,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: '/image.jpg',
            price: '$0.00',
          },
        ],
      },
    ]);
  });
});
