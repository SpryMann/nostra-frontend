interface CuratedDataItem {
  id: number;
  image: string;
  title: string;
  linkText: string;
  linkPath: string;
}

const curatedData: CuratedDataItem[] = [
  {
    id: 1,
    image: '/images/curated/curated_1.jpg',
    title: 'Best seller',
    linkText: 'Best Seller',
    linkPath: '/popular',
  },
  {
    id: 2,
    image: '/images/curated/curated_2.jpg',
    title: 'Shop men',
    linkText: 'Shop Men',
    linkPath: '/shop?category=12',
  },
  {
    id: 3,
    image: '/images/curated/curated_3.jpg',
    title: 'Shop women',
    linkText: 'Shop Women',
    linkPath: '/shop?category=13',
  },
  {
    id: 4,
    image: '/images/curated/curated_4.jpg',
    title: 'Shop casual',
    linkText: 'Shop Casual',
    linkPath: '/shop?category=14',
  },
];

export default curatedData;
