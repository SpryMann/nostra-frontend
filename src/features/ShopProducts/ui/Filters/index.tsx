import classNames from 'classnames';
import { MdClose } from 'react-icons/md';

import filtersData from './data';

import styles from './Filters.module.scss';

interface Props {
  className?: string;
}

function Filters(props: Props) {
  const { className = '' } = props;

  return (
    <div className={classNames(styles.filters, className)}>
      <p className={styles.filtersText}>Applied filters:</p>
      <ul className={styles.filtersList}>
        {filtersData.map((item) => (
          <li className={styles.filtersItem} key={item.id}>
            <button className={styles.filtersButton} type="button">
              {item.filter}
              <MdClose className={styles.filtersIcon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
