import classNames from 'classnames';

import styles from './CheckboxTag.module.scss';

interface Props {
  className?: string;
  id: string;
  title: string;
}

function CheckboxTag(props: Props) {
  const { className = '', id, title } = props;

  return (
    <label className={classNames(styles.size, className)} htmlFor={id}>
      <input className={styles.sizeInput} id={id} type="checkbox" />
      <span className={styles.sizeText}>{title}</span>
    </label>
  );
}

export default CheckboxTag;
