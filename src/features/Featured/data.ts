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
    image: '/images/featured/featured_1.webp',
    oldPrice: 0,
    price: 8,
    isSale: false,
  },
  {
    id: 2,
    title: 'Sleeve Shirt',
    image: '/images/featured/featured_2.webp',
    oldPrice: 0,
    price: 20,
    isSale: false,
  },
  {
    id: 3,
    title: 'Collar Overcoat',
    image: '/images/featured/featured_3.webp',
    oldPrice: 45,
    price: 38,
    isSale: true,
  },
  {
    id: 4,
    title: 'Wide Leg Pants',
    image: '/images/featured/featured_4.jpg',
    oldPrice: 0,
    price: 23,
    isSale: false,
  },
  {
    id: 5,
    title: 'Thermal Lined Hoodie',
    image: '/images/featured/featured_5.webp',
    oldPrice: 0,
    price: 22,
    isSale: false,
  },
];

export default featuredData;
