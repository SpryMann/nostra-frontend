import classNames from 'classnames';

import styles from './ProductVariants.module.scss';

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

function ProductVariants(props: Props) {
  const { children, title, className = '' } = props;

  return (
    <div className={classNames(styles.variants, className)}>
      <h2 className={styles.variantsTitle}>{title}</h2>
      <div className={styles.variantsList}>{children}</div>
    </div>
  );
}

export default ProductVariants;
