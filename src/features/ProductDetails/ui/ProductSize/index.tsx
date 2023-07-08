import classNames from 'classnames';

import styles from './ProductSize.module.scss';

interface Props {
  chosenValue: string;
  onChange: () => void;
  value: string;
  className?: string;
}

function ProductSize(props: Props) {
  const { chosenValue, onChange, value, className = '' } = props;

  return (
    <label className={classNames(styles.size, className)} htmlFor={value}>
      <input
        className={styles.sizeInput}
        id={value}
        name="size"
        type="radio"
        value={value}
        checked={chosenValue === value}
        onChange={onChange}
      />
      <span className={styles.sizeButton}>{value}</span>
    </label>
  );
}

export default ProductSize;
