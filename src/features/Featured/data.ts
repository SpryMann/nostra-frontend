import {
  FeaturedFifthImage,
  FeaturedFirstImage,
  FeaturedFourthImage,
  FeaturedSecondImage,
  FeaturedThirdImage,
} from 'shared/assets';

interface FeaturedDataItem {
  id: number;
  title: string;
  image: string;
  oldPrice: number;
  price: number;
  isSale: boolean;
}

const featuredData: FeaturedDataItem[] = [
  {
    id: 1,
    title: 'Cami Dress',
    image: FeaturedFirstImage,
    oldPrice: 0,
    price: 8,
    isSale: false,
  },
  {
    id: 2,
    title: 'Sleeve Shirt',
    image: FeaturedSecondImage,
    oldPrice: 0,
    price: 20,
    isSale: false,
  },
  {
    id: 3,
    title: 'Collar Overcoat',
    image: FeaturedThirdImage,
    oldPrice: 45,
    price: 38,
    isSale: true,
  },
  {
    id: 4,
    title: 'Wide Leg Pants',
    image: FeaturedFourthImage,
    oldPrice: 0,
    price: 23,
    isSale: false,
  },
  {
    id: 5,
    title: 'Thermal Lined Hoodie',
    image: FeaturedFifthImage,
    oldPrice: 0,
    price: 22,
    isSale: false,
  },
];

export default featuredData;
