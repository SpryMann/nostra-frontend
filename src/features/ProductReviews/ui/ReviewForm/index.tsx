import classNames from 'classnames';
import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';

import styles from './ReviewForm.module.scss';

function ReviewForm() {
  const [rating, setRating] = useState(0);

  return (
    <form className={styles.form}>
      <div className={styles.formRating}>
        {Array.from(Array(6).keys())
          .slice(1)
          .map((item) => (
            <label
              className={classNames(styles.star, {
                [styles.starActive]: item <= rating,
              })}
              key={item}
              htmlFor={`rating_${item}`}
            >
              <input
                className={styles.starInput}
                id={`rating_${item}`}
                name="rating"
                type="radio"
                value={item}
                checked={rating === item}
                onChange={() => setRating(item)}
              />
              <BsStarFill className={styles.starIcon} />
            </label>
          ))}
      </div>
      <textarea className={styles.formText} placeholder="Enter a review" />
      <button className={styles.formButton} type="submit">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
