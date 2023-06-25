import {
  CuratedFirstImage,
  CuratedFourthImage,
  CuratedSecondImage,
  CuratedThirdImage,
} from 'shared/assets';

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
    image: CuratedFirstImage,
    title: 'Best seller',
    linkText: 'Best Seller',
    linkPath: '/popular',
  },
  {
    id: 2,
    image: CuratedSecondImage,
    title: 'Shop men',
    linkText: 'Shop Men',
    linkPath: '/shop?category=12',
  },
  {
    id: 3,
    image: CuratedThirdImage,
    title: 'Shop women',
    linkText: 'Shop Women',
    linkPath: '/shop?category=13',
  },
  {
    id: 4,
    image: CuratedFourthImage,
    title: 'Shop casual',
    linkText: 'Shop Casual',
    linkPath: '/shop?category=14',
  },
];

export default curatedData;
