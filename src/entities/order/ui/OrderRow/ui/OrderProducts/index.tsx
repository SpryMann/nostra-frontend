import { OrderProductsDetails } from 'entities/order';

import countTotalPrice from './lib';

import styles from './OrderProducts.module.scss';

interface Props {
  data: OrderProductsDetails[];
}

function OrderProducts(props: Props) {
  const { data } = props;

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableCell}>Product</div>
        <div className={styles.tableCell}>Qty.</div>
        <div className={styles.tableCell}>Price</div>
        <div className={styles.tableCell}>Total</div>
      </div>
      {data.map((item) => (
        <div className={styles.tableRow} key={item.id}>
          <div className={styles.tableCell}>
            <div className={styles.product}>
              <div className={styles.productImageWrapper}>
                <img
                  className={styles.productImage}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{item.title}</h3>
                <p className={styles.productId}>{item.id}</p>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>{item.quantity}</div>
          <div className={styles.tableCell}>${item.price.toFixed(2)}</div>
          <div className={styles.tableCell}>
            ${countTotalPrice(item.quantity, item.price).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderProducts;
