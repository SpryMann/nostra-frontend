import {
  HeroFirstImage,
  HeroFourthImage,
  HeroSecondImage,
  HeroThirdImage,
} from 'shared/assets';

interface HeroDataItem {
  id: number;
  image: string;
  title: string;
}

const heroData: HeroDataItem[] = [
  {
    id: 1,
    image: HeroFirstImage,
    title: 'Level up your style with our summer collections',
  },
  {
    id: 2,
    image: HeroSecondImage,
    title: 'Level up your style with our summer collections',
  },
  {
    id: 3,
    image: HeroThirdImage,
    title: 'Level up your style with our summer collections',
  },
  {
    id: 4,
    image: HeroFourthImage,
    title: 'Level up your style with our summer collections',
  },
];

export default heroData;
