export interface Order {
  id: string;
  date: string;
  items: number;
  total: number;
  status: OrderStatus;
  shippingDetails: OrderShippingDetails[];
  productsDetails: OrderProductsDetails[];
  totalDetails: OrderTotalAmountDetails;
}

type OrderStatus =
  | 'Shipped'
  | 'Confirmed'
  | 'Waiting for shipment'
  | 'Canceled';

export interface OrderShippingDetails {
  id: number;
  shippingAddress: string;
  billingAddress: string;
  shippingMethod: string;
  paymentMethod: string;
  trackingNumber: string;
}

export interface OrderProductsDetails {
  id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

export interface OrderTotalAmountDetails {
  subtotal: number;
  discount: number;
  percentDiscount: number;
  shipmentCost: number;
}
