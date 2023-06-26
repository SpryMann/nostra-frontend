import classNames from 'classnames';
import { memo } from 'react';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  min: number;
  max: number;
  minMaxGap: number;
  currentMin: number;
  currentMax: number;
  handleUpdateMin: (value: number) => void;
  handleUpdateMax: (value: number) => void;
}

function Multirange(props: Props) {
  const {
    className = '',
    min,
    max,
    minMaxGap,
    currentMin,
    currentMax,
    handleUpdateMin,
    handleUpdateMax,
  } = props;

  const handleChangeMinValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleUpdateMin(
      currentMax - parseInt(event.target.value, 10) <= minMaxGap
        ? currentMax - minMaxGap
        : parseInt(event.target.value, 10)
    );

  const handleChangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleUpdateMax(
      parseInt(event.target.value, 10) - currentMin <= minMaxGap
        ? currentMin + minMaxGap
        : parseInt(event.target.value, 10)
    );

  return (
    <div className={classNames(styles.multirange, className)}>
      <div className={styles.multirangeSlider}>
        <div
          className={styles.multirangeProgress}
          style={{
            left: `${(currentMin / (max - min)) * 100}%`,
            right: `${100 - (currentMax / (max - min)) * 100}%`,
          }}
        />
      </div>
      <div className={styles.multirangeRanges}>
        <input
          className={styles.multirangeRange}
          type="range"
          min={min}
          max={max}
          step={(max - min) / 100}
          value={currentMin}
          onChange={handleChangeMinValue}
        />
        <input
          className={styles.multirangeRange}
          type="range"
          min={min}
          max={max}
          step={(max - min) / 100}
          value={currentMax}
          onChange={handleChangeMaxValue}
        />
      </div>
    </div>
  );
}

const MemoizedMultirange = memo(Multirange);

export default MemoizedMultirange;
