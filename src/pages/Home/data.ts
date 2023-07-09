import { Product } from 'entities/product';
import {
  AdidasBrandImage,
  CalvinKleinBrandImage,
  ChanelBrandImage,
  DolceGabannaBrandImage,
  FeaturedFifthImage,
  FeaturedFirstImage,
  FeaturedFourthImage,
  FeaturedSecondImage,
  FeaturedThirdImage,
  GucciBrandImage,
  GuessBrandImage,
  LevisBrandImage,
  VersaceBrandImage,
} from 'shared/assets';

interface BrandsDataItem {
  id: number;
  image: string;
  title: string;
  path: string;
}

export const brandsData: BrandsDataItem[] = [
  {
    id: 1,
    image: ChanelBrandImage,
    title: 'Chanel logo',
    path: '/shop?brands=1',
  },
  {
    id: 2,
    image: CalvinKleinBrandImage,
    title: 'Calvin Klein logo',
    path: '/shop?brands=2',
  },
  {
    id: 3,
    image: GuessBrandImage,
    title: 'Guess logo',
    path: '/shop?brands=3',
  },
  {
    id: 4,
    image: GucciBrandImage,
    title: 'Gucci logo',
    path: '/shop?brands=4',
  },
  {
    id: 5,
    image: DolceGabannaBrandImage,
    title: 'Dolce & Gabanna logo',
    path: '/shop?brands=5',
  },
  {
    id: 6,
    image: AdidasBrandImage,
    title: 'Adidas logo',
    path: '/shop?brands=6',
  },
  {
    id: 7,
    image: LevisBrandImage,
    title: "Levi's logo",
    path: '/shop?brands=7',
  },
  {
    id: 8,
    image: VersaceBrandImage,
    title: 'Versace logo',
    path: '/shop?brands=8',
  },
];

export const featuredProductsData: Product[] = [
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
