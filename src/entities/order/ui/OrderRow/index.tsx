import classNames from 'classnames';
import { Order } from 'entities/order';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { OrderProducts, OrderShipping, OrderTotal } from './ui';

import styles from './OrderRow.module.scss';

interface Props {
  data: Order;
  className?: string;
}

function OrderRow(props: Props) {
  const {
    data: {
      id,
      date,
      items,
      total,
      status,
      shippingDetails,
      productsDetails,
      totalDetails,
    },
    className = '',
  } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className={classNames(styles.row, className)}>
        <div className={styles.cell}>
          <button
            className={classNames(styles.button, styles.buttonWithIcon)}
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
          >
            <BsChevronDown className={styles.buttonIcon} />
          </button>
        </div>
        <div className={styles.cell}>{id}</div>
        <div className={styles.cell}>{date}</div>
        <div className={styles.cell}>{items}</div>
        <div className={styles.cell}>${total.toFixed(2)}</div>
        <div className={styles.cell}>
          <span
            className={classNames(
              styles.status,
              {
                [styles.statusShipped]: status === 'Shipped',
              },
              { [styles.statusConfirmed]: status === 'Confirmed' },
              { [styles.statusWaiting]: status === 'Waiting for shipment' },
              { [styles.statusCanceled]: status === 'Canceled' }
            )}
          >
            {status}
          </span>
        </div>
        <div className={styles.cell}>
          <button
            className={classNames(styles.button, styles.buttonWithText)}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
      <div
        className={classNames(styles.details, {
          [styles.detailsActive]: showDetails,
        })}
      >
        <div className={styles.detailsContent}>
          <OrderShipping data={shippingDetails} />
          <OrderProducts data={productsDetails} />
          <OrderTotal data={totalDetails} />
        </div>
      </div>
    </>
  );
}

export default OrderRow;
