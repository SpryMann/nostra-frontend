import classNames from 'classnames';
import { BsCheck } from 'react-icons/bs';

import styles from './CheckboxCheck.module.scss';

interface Props {
  className?: string;
  id: string;
  title: string;
}

function CheckboxCheck(props: Props) {
  const { className = '', id, title } = props;

  return (
    <label className={classNames(styles.checkbox, className)} htmlFor={id}>
      <input className={styles.checkboxInput} id={id} type="checkbox" />
      <div className={styles.checkboxIconWrapper}>
        <BsCheck className={styles.checkboxIcon} />
      </div>
      {title}
    </label>
  );
}

export default CheckboxCheck;
