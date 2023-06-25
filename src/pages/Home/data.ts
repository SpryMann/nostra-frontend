import { AdidasBrandImage, CalvinKleinBrandImage, ChanelBrandImage, DolceGabannaBrandImage, GucciBrandImage, GuessBrandImage, LevisBrandImage, VersaceBrandImage } from "shared/assets";

interface BrandsDataItem {
  id: number;
  image: string;
  title: string;
  path: string;
}

const brandsData: BrandsDataItem[] = [
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

export default brandsData;
