import classNames from 'classnames';
import { Section } from 'shared/ui';

import styles from './styles.module.scss';

interface Props {
  items: string[][];
  className?: string;
}

function ProductDescription(props: Props) {
  const { items, className = '' } = props;

  return (
    <Section className={className} title="The Details">
      <div className={styles.description}>
        <div className={classNames(styles.table, styles.descriptionTable)}>
          <div className={styles.tableHeader}>
            <div className={styles.tableCell}>Property</div>
            <div className={styles.tableCell}>Value</div>
          </div>
          {items.map((item) => (
            <div className={styles.tableRow} key={item[0]}>
              <div className={styles.tableCell}>{item[0]}</div>
              <div className={styles.tableCell}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProductDescription;
