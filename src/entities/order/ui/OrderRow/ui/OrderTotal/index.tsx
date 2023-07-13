import classNames from 'classnames';
import { OrderTotalAmountDetails } from 'entities/order';

import countTotalOrderPrice from './lib';

import styles from './OrderTotal.module.scss';

interface Props {
  data: OrderTotalAmountDetails;
}

function OrderTotal(props: Props) {
  const {
    data: { subtotal, discount, percentDiscount, shipmentCost },
  } = props;

  return (
    <div className={styles.total}>
      <ul className={styles.totalList}>
        <li className={styles.totalItem}>
          <span className={styles.totalKey}>Subtotal:</span>
          <span className={styles.totalValue}>${subtotal.toFixed(2)}</span>
        </li>
        <li className={styles.totalItem}>
          <span className={styles.totalKey}>Discount:</span>
          <span className={styles.totalValue}>
            -${discount} ({percentDiscount}% OFF)
          </span>
        </li>
        <li className={styles.totalItem}>
          <div className={styles.totalFull}>
            <div className={styles.totalItem}>
              <span className={styles.totalKey}>Shipment cost:</span>
              <span className={styles.totalValue}>
                ${shipmentCost.toFixed(2)}
              </span>
            </div>
            <div className={styles.totalItem}>
              <span className={styles.totalKey}>Grand total:</span>
              <span
                className={classNames(styles.totalValue, styles.totalValueBold)}
              >
                $
                {countTotalOrderPrice(subtotal, discount, shipmentCost).toFixed(
                  2
                )}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OrderTotal;
