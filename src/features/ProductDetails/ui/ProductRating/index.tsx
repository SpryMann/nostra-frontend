import classNames from 'classnames';
import { BsStarFill } from 'react-icons/bs';

import styles from './ProductRating.module.scss';

interface Props {
  rating: number;
  className?: string;
}

function ProductRating(props: Props) {
  const { rating, className = '' } = props;

  return (
    <div className={classNames(styles.rating, className)}>
      <div className={styles.ratingStars}>
        {Array.from(Array(6).keys())
          .slice(1)
          .map((item) => (
            <BsStarFill
              className={classNames(styles.ratingStar, {
                [styles.ratingStarFill]: item <= rating,
              })}
              key={item}
            />
          ))}
      </div>
      <span className={styles.ratingStats}>({rating})</span>
    </div>
  );
}

export default ProductRating;
