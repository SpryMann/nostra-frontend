import { Product } from 'entities/product';
import {
  FeaturedFifthImage,
  FeaturedFirstImage,
  FeaturedFourthImage,
  FeaturedSecondImage,
  FeaturedThirdImage,
} from 'shared/assets';
import { TabsTitle } from 'shared/ui';

export const tabsData: TabsTitle[] = [
  {
    id: 1,
    title: 'The Details',
    withBadge: false,
  },
  {
    id: 2,
    title: 'Ratings & Reviews',
    withBadge: true,
    badgeNumber: 32,
  },
  {
    id: 3,
    title: 'Discussion',
    withBadge: true,
    badgeNumber: 5,
  },
];

export const detailsData = [
  ['Color', 'White'],
  ['Style', 'Boho'],
  ['Pattern Type', 'Ditsy Floral'],
  ['Details', 'Contrast Lace, Frill, Zipper, Tie Front, Ruched Bust'],
  ['Neckline', 'Spaghetti Strap'],
  ['Type', 'Cami'],
  ['Sleeve Length', 'Sleeveless'],
  ['Waist Line', 'High Waist'],
  ['Hem Shaped', 'Flared'],
  ['Length', 'Short'],
  ['Fit Type', 'Regular Fit'],
  ['Fabric', 'Non-Stretch'],
  ['Material', 'Fabric'],
  ['Composition', '100% Polyester'],
  ['Care Instructions', 'Machine wash, do not dry clean'],
  ['Body', 'Lined'],
  ['Sheer', 'No'],
  ['Lining', '100% Polyester'],
];

export const relatedProductsData: Product[] = [
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
