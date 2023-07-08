import classNames from 'classnames';
import { BsStarFill } from 'react-icons/bs';

import styles from './Rating.module.scss';

interface Props {
  rating: number;
  className?: string;
}

function Rating(props: Props) {
  const { rating, className = '' } = props;

  return (
    <div className={classNames(styles.rating, className)}>
      {Array.from(Array(6).keys())
        .slice(1)
        .map((item) => (
          <BsStarFill
            className={classNames(styles.ratingIcon, {
              [styles.ratingIconFill]: item <= rating,
            })}
            key={item}
          />
        ))}
    </div>
  );
}

export default Rating;
