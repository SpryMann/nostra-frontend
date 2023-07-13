function countTotalOrderPrice(
  subtotal: number,
  discount: number,
  shipment: number
): number {
  return subtotal - discount + shipment;
}

export default countTotalOrderPrice;
