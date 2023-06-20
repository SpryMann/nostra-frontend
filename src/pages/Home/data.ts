interface BrandsDataItem {
  id: number;
  image: string;
  title: string;
  path: string;
}

const brandsData: BrandsDataItem[] = [
  {
    id: 1,
    image: '/images/brands/chanel.png',
    title: 'Chanel logo',
    path: '/shop?brands=1',
  },
  {
    id: 2,
    image: '/images/brands/calvin_klein.png',
    title: 'Calvin Klein logo',
    path: '/shop?brands=2',
  },
  {
    id: 3,
    image: '/images/brands/guess.png',
    title: 'Guess logo',
    path: '/shop?brands=3',
  },
  {
    id: 4,
    image: '/images/brands/gucci.png',
    title: 'Gucci logo',
    path: '/shop?brands=4',
  },
  {
    id: 5,
    image: '/images/brands/dolce_gabanna.png',
    title: 'Dolce & Gabanna logo',
    path: '/shop?brands=5',
  },
  {
    id: 6,
    image: '/images/brands/adidas.png',
    title: 'Adidas logo',
    path: '/shop?brands=6',
  },
  {
    id: 7,
    image: '/images/brands/levis.png',
    title: "Levi's logo",
    path: '/shop?brands=7',
  },
  {
    id: 8,
    image: '/images/brands/versace.png',
    title: 'Versace logo',
    path: '/shop?brands=8',
  },
];

export default brandsData;
