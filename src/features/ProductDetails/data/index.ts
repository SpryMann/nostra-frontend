import {
  ColorsBlackImage,
  ColorsGrayImage,
  ProductFifthImage,
  ProductFirstImage,
  ProductFourthImage,
  ProductSecondImage,
  ProductSixthImage,
  ProductThirdImage,
} from 'shared/assets';

export const productImages = [
  ProductFirstImage,
  ProductSecondImage,
  ProductThirdImage,
  ProductFourthImage,
  ProductFifthImage,
  ProductSixthImage,
];

export const productSizesData = [
  {
    id: 1,
    size: 's',
  },
  {
    id: 2,
    size: 'm',
  },
  {
    id: 3,
    size: 'l',
  },
];

export const productColorsData = [
  {
    id: 1,
    color: 'black',
    label: 'Black color',
    image: ColorsBlackImage,
  },
  {
    id: 2,
    color: 'gray',
    label: 'Gray color',
    image: ColorsGrayImage,
  },
];
