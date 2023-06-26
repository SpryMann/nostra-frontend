import classNames from 'classnames';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import styles from './FilterDropdown.module.scss';

interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

function FilterDropdown(props: Props) {
  const { className = '', title, children } = props;
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={classNames(styles.dropdown, className, {
        [styles.dropdownActive]: isShow,
      })}
    >
      <button
        className={styles.dropdownHeader}
        type="button"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {title}
        <BiChevronRight className={styles.dropdownIcon} />
      </button>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  );
}

export default FilterDropdown;
