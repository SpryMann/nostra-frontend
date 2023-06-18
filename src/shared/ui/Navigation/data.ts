const navigationData = [
  {
    id: 1,
    name: 'Shop',
    link: '/shop',
    hasSubmenu: true,
    items: [
      {
        id: 1,
        name: 'Shop',
        links: [
          {
            id: 1,
            name: 'View All',
            link: '/shop',
          },
        ],
      },
      {
        id: 2,
        name: 'Women',
        links: [
          {
            id: 1,
            name: 'Tops',
            link: '/shop?category=1',
          },
          {
            id: 2,
            name: 'Dresses',
            link: '/shop?category=2',
          },
          {
            id: 3,
            name: 'Beachwear',
            link: '/shop?category=3',
          },
          {
            id: 4,
            name: 'Sports & Outdoors',
            link: '/shop?category=4',
          },
          {
            id: 5,
            name: 'Shoes & Accessories',
            link: '/shop?category=5',
          },
        ],
      },
      {
        id: 3,
        name: 'Men',
        links: [
          {
            id: 1,
            name: 'Tops',
            link: '/shop?category=6',
          },
          {
            id: 2,
            name: 'Bottoms',
            link: '/shop?category=7',
          },
          {
            id: 3,
            name: 'Swimwear',
            link: '/shop?category=8',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Most wanted',
    link: '/popular',
    hasSubmenu: false,
    items: [],
  },
  {
    id: 3,
    name: 'New arrival',
    link: '/new',
    hasSubmenu: false,
    items: [],
  },
  {
    id: 4,
    name: 'Brands',
    link: '/brands',
    hasSubmenu: false,
    items: [],
  },
];

export default navigationData;
