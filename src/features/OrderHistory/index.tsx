import classNames from 'classnames';
import { BsSliders } from 'react-icons/bs';

import { OrderSearch, OrdersTable } from './ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function OrderHistory(props: Props) {
  const { className = '' } = props;

  return (
    <section className={classNames(styles.history, className)}>
      <h2 className={styles.historyTitle}>Order history</h2>
      <p className={styles.historySubtitle}>Here you can manage your order</p>
      <div className={classNames(styles.filters, styles.historyFilters)}>
        <OrderSearch className={styles.filtersSearch} />
        <button className={styles.filtersButton} type="button">
          <BsSliders className={styles.filtersIcon} />
          Filters
        </button>
      </div>
      <div className={styles.historyOrders}>
        <OrdersTable />
      </div>
    </section>
  );
}

export default OrderHistory;
