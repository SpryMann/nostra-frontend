import classNames from 'classnames';
import { useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { useOnClickOutside } from 'shared/lib';

import { SelectOption } from './types';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
}

function Select(props: Props) {
  const { className = '', options, value, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  useOnClickOutside(containerRef, () => setShowOptions(false));

  const isOptionSelected = (option: SelectOption) =>
    option.value === value.value;
  const handleClickOption = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    option: SelectOption
  ) => {
    event.stopPropagation();
    onChange(option);
    setShowOptions(false);
  };

  return (
    <div
      className={classNames(styles.select, className, {
        [styles.selectActive]: showOptions,
      })}
      ref={containerRef}
    >
      <button
        className={styles.selectHeader}
        type="button"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        {value.label}
        <BiChevronRight className={styles.selectIcon} />
      </button>
      <div className={styles.selectContainer}>
        <ul className={styles.selectList}>
          {options.map((option) => (
            <li className={styles.selectItem} key={option.value}>
              <button
                className={classNames(styles.selectButton, {
                  [styles.selectButtonSelected]: isOptionSelected(option),
                })}
                type="button"
                onClick={(event) => handleClickOption(event, option)}
              >
                {option.label}
                <BsCheck className={styles.selectCheck} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Select;
