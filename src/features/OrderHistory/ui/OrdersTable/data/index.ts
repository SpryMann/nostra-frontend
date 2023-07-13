import { Order } from 'entities/order';
import {
  FeaturedFirstImage,
  FeaturedSecondImage,
  FeaturedThirdImage,
} from 'shared/assets';

const orderData: Order[] = [
  {
    id: '#001799',
    date: '09/11/2022',
    items: 3,
    total: 7022.5,
    status: 'Shipped',
    shippingDetails: [
      {
        id: 1,
        shippingAddress:
          'Majapahit St. 77E, New York, NY 10150, USA (212)445-7622',
        billingAddress: 'Same as shipping address',
        shippingMethod: 'Express delivery (DHL Express)',
        paymentMethod: 'VISA xxxx 5642',
        trackingNumber: 'ID25725728RS',
      },
    ],
    productsDetails: [
      {
        id: 'NS-32502305',
        title: 'Cami Dress',
        image: FeaturedFirstImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34242224',
        title: 'Shirt',
        image: FeaturedSecondImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34247575',
        title: 'Leather Coat',
        image: FeaturedThirdImage,
        quantity: 1,
        price: 2500,
      },
    ],
    totalDetails: {
      subtotal: 7500,
      discount: 500,
      percentDiscount: 20,
      shipmentCost: 22.5,
    },
  },
  {
    id: '#001798',
    date: '08/11/2022',
    items: 1,
    total: 1200,
    status: 'Confirmed',
    shippingDetails: [
      {
        id: 1,
        shippingAddress:
          'Majapahit St. 77E, New York, NY 10150, USA (212)445-7622',
        billingAddress: 'Same as shipping address',
        shippingMethod: 'Express delivery (DHL Express)',
        paymentMethod: 'VISA xxxx 5642',
        trackingNumber: 'ID25725728RS',
      },
    ],
    productsDetails: [
      {
        id: 'NS-32502305',
        title: 'Cami Dress',
        image: FeaturedFirstImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34242224',
        title: 'Shirt',
        image: FeaturedSecondImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34247575',
        title: 'Leather Coat',
        image: FeaturedThirdImage,
        quantity: 1,
        price: 2500,
      },
    ],
    totalDetails: {
      subtotal: 7500,
      discount: 500,
      percentDiscount: 20,
      shipmentCost: 22.5,
    },
  },
  {
    id: '#001797',
    date: '05/11/2022',
    items: 1,
    total: 554,
    status: 'Waiting for shipment',
    shippingDetails: [
      {
        id: 1,
        shippingAddress:
          'Majapahit St. 77E, New York, NY 10150, USA (212)445-7622',
        billingAddress: 'Same as shipping address',
        shippingMethod: 'Express delivery (DHL Express)',
        paymentMethod: 'VISA xxxx 5642',
        trackingNumber: 'ID25725728RS',
      },
    ],
    productsDetails: [
      {
        id: 'NS-32502305',
        title: 'Cami Dress',
        image: FeaturedFirstImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34242224',
        title: 'Shirt',
        image: FeaturedSecondImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34247575',
        title: 'Leather Coat',
        image: FeaturedThirdImage,
        quantity: 1,
        price: 2500,
      },
    ],
    totalDetails: {
      subtotal: 7500,
      discount: 500,
      percentDiscount: 20,
      shipmentCost: 22.5,
    },
  },
  {
    id: '#001796',
    date: '02/11/2022',
    items: 4,
    total: 845,
    status: 'Canceled',
    shippingDetails: [
      {
        id: 1,
        shippingAddress:
          'Majapahit St. 77E, New York, NY 10150, USA (212)445-7622',
        billingAddress: 'Same as shipping address',
        shippingMethod: 'Express delivery (DHL Express)',
        paymentMethod: 'VISA xxxx 5642',
        trackingNumber: 'ID25725728RS',
      },
    ],
    productsDetails: [
      {
        id: 'NS-32502305',
        title: 'Cami Dress',
        image: FeaturedFirstImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34242224',
        title: 'Shirt',
        image: FeaturedSecondImage,
        quantity: 1,
        price: 2500,
      },
      {
        id: 'NS-34247575',
        title: 'Leather Coat',
        image: FeaturedThirdImage,
        quantity: 1,
        price: 2500,
      },
    ],
    totalDetails: {
      subtotal: 7500,
      discount: 500,
      percentDiscount: 20,
      shipmentCost: 22.5,
    },
  },
];

export default orderData;
