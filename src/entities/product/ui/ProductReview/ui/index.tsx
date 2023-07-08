import classNames from 'classnames';
import { BsHeart } from 'react-icons/bs';

import { Review } from '../types';

import Rating from './Rating';

import styles from './styles.module.scss';

interface Props {
  data: Review;
  className?: string;
}

function ProductReview(props: Props) {
  const {
    data: { image, name, date, rating, text, likes },
    className = '',
  } = props;

  return (
    <div className={classNames(styles.review, className)}>
      <div className={styles.reviewImageWrapper}>
        <img className={styles.reviewImage} src={image} alt={name} />
      </div>
      <div className={styles.reviewContent}>
        <div className={styles.reviewTop}>
          <h2 className={styles.reviewName}>{name}</h2>
          <span className={styles.reviewDate}>{date}</span>
        </div>
        <Rating className={styles.reviewRating} rating={rating} />
        <p className={styles.reviewText}>{text}</p>
        <div className={styles.reviewActions}>
          <button className={styles.reviewButton} type="button">
            <BsHeart className={styles.reviewIcon} />
            Like
          </button>
          {likes ? (
            <span className={styles.reviewStats}>{likes} likes</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
