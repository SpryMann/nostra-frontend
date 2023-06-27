import {
  FeaturedFifthImage,
  FeaturedFirstImage,
  FeaturedFourthImage,
  FeaturedSecondImage,
  FeaturedThirdImage,
} from 'shared/assets';

const productsData = [
  {
    id: 1,
    path: '/product/1',
    image: FeaturedFirstImage,
    title: 'Cami Dress',
    price: 8,
    oldPrice: 0,
    isSale: false,
    colors: 2,
  },
  {
    id: 2,
    path: '/product/2',
    image: FeaturedSecondImage,
    title: 'Sleeve Shirt',
    price: 20,
    oldPrice: 24,
    isSale: true,
    colors: 2,
  },
  {
    id: 3,
    path: '/product/3',
    image: FeaturedThirdImage,
    title: 'Collar Overcoat',
    price: 38,
    oldPrice: 45,
    isSale: true,
    colors: 3,
  },
  {
    id: 4,
    path: '/product/4',
    image: FeaturedFourthImage,
    title: 'Wide Leg Pants',
    price: 23,
    oldPrice: 0,
    isSale: false,
    colors: 3,
  },
  {
    id: 5,
    path: '/product/5',
    image: FeaturedFifthImage,
    title: 'Thermal Lined Hoodie',
    price: 22,
    oldPrice: 0,
    isSale: false,
    colors: 2,
  },
];

export default productsData;
