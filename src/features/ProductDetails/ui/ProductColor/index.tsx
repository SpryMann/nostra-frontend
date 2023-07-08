import classNames from 'classnames';

import styles from './ProductColor.module.scss';

interface Props {
  chosenValue: string;
  colorImage: string;
  colorLabel: string;
  onChange: () => void;
  value: string;
  className?: string;
}

function ProductColor(props: Props) {
  const {
    chosenValue,
    colorImage,
    colorLabel,
    onChange,
    value,
    className = '',
  } = props;

  return (
    <label className={classNames(styles.color, className)} htmlFor={value}>
      <input
        className={styles.colorInput}
        id={value}
        name="color"
        type="radio"
        value={value}
        checked={chosenValue === value}
        onChange={onChange}
      />
      <div className={styles.colorImageWrapper}>
        <img className={styles.colorImage} src={colorImage} alt={colorLabel} />
      </div>
    </label>
  );
}

export default ProductColor;
