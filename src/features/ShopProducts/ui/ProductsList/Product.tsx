import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  path: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  isSale: boolean;
  colors: number;
}

function Product(props: Props) {
  const { path, image, title, price, oldPrice, isSale, colors } = props;

  return (
    <div className={styles.product}>
      <Link className={styles.productImageWrapper} to={path}>
        <img className={styles.productImage} src={image} alt={title} />
        {isSale ? <span className={styles.productSale}>Sale</span> : null}
      </Link>
      <div className={styles.productInfo}>
        <div className={styles.productTop}>
          <h2 className={styles.productTitle}>
            <Link className={styles.productLink} to={path}>
              {title}
            </Link>
          </h2>
          <span className={styles.productPrice}>${price}</span>
        </div>
        <div className={styles.productBottom}>
          <p className={styles.productColors}>{colors} Colors</p>
          {isSale ? (
            <p
              className={classNames(
                styles.productPrice,
                styles.productPriceOld
              )}
            >
              ${oldPrice}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Product;
