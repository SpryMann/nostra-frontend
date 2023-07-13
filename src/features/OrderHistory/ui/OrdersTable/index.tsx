import classNames from 'classnames';
import { OrderRow } from 'entities/order';

import orderData from './data';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function OrdersTable(props: Props) {
  const { className = '' } = props;

  return (
    <div className={classNames(styles.table, className)}>
      <div className={styles.tableHeader}>
        <div className={styles.tableCell} />
        <div className={styles.tableCell}>Order ID</div>
        <div className={styles.tableCell}>Date</div>
        <div className={styles.tableCell}>Items</div>
        <div className={styles.tableCell}>Total amount</div>
        <div className={styles.tableCell}>Status</div>
        <div className={styles.tableCell}>Action</div>
      </div>
      {orderData.map((item) => (
        <OrderRow data={item} key={item.id} />
      ))}
    </div>
  );
}

export default OrdersTable;
