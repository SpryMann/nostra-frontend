import { OrderShippingDetails } from 'entities/order';
import { BsThreeDotsVertical } from 'react-icons/bs';

import styles from './OrderShipping.module.scss';

interface Props {
  data: OrderShippingDetails[];
}

function OrderShipping(props: Props) {
  const { data } = props;

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableCell}>Shipping address</div>
        <div className={styles.tableCell}>Billing address</div>
        <div className={styles.tableCell}>Shipping method</div>
        <div className={styles.tableCell}>Payment method</div>
        <div className={styles.tableCell}>Tracking number</div>
        <div className={styles.tableCell}>Action</div>
      </div>
      {data.map((item) => (
        <div className={styles.tableRow} key={item.id}>
          <div className={styles.tableCell}>{item.shippingAddress}</div>
          <div className={styles.tableCell}>{item.billingAddress}</div>
          <div className={styles.tableCell}>{item.shippingMethod}</div>
          <div className={styles.tableCell}>{item.paymentMethod}</div>
          <div className={styles.tableCell}>
            <span className={styles.track}>{item.trackingNumber}</span>
          </div>
          <div className={styles.tableCell}>
            <button className={styles.button} type="button">
              <BsThreeDotsVertical className={styles.buttonIcon} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderShipping;
