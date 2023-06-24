import classNames from 'classnames';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  isSale: boolean;
  className?: string;
}

function ProductCard(props: Props) {
  const { id, title, image, price, oldPrice, isSale, className = '' } = props;

  return (
    <div className={classNames(styles.card, className)}>
      <Link className={styles.cardImageWrapper} to={`/product/${id}`}>
        <img className={styles.cardImage} src={image} alt={title} />
      </Link>
      {isSale ? <span className={styles.cardSaleBadge}>sale</span> : null}
      <div className={styles.cardBottom}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>
            <Link className={styles.cardLink} to={`/product/${id}`}>
              {title}
            </Link>
          </h3>
          <div className={styles.cardPrices}>
            <span className={styles.cardPrice}>${price}</span>
            {oldPrice ? (
              <span className={styles.cardPriceOld}>${oldPrice}</span>
            ) : null}
          </div>
        </div>
        <button className={styles.cardButton} type="button">
          <BsCartPlus className={styles.cardIcon} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
