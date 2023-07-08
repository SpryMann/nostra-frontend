import classNames from 'classnames';
import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { productColorsData, productImages, productSizesData } from './data';
import {
  ProductColor,
  ProductImages,
  ProductRating,
  ProductSize,
  ProductVariants,
} from './ui';

import styles from './styles.module.scss';

interface Props {
  productId: string;
  className?: string;
}

function ProductDetails(props: Props) {
  const { productId, className = '' } = props;
  const [chosenSize, setChosenSize] = useState('s');
  const [chosenColor, setChosenColor] = useState('black');

  return (
    <div className={classNames(styles.product, className)}>
      <div className={styles.productMain}>
        <ProductImages
          className={styles.productImages}
          images={productImages}
        />
        <div className={styles.productRight}>
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>Cami Dress</h1>
            <ProductRating className={styles.productRating} rating={4.9} />
            <span className={styles.productPrice}>$16</span>
          </div>
          <div className={styles.productVariants}>
            <ProductVariants
              className={styles.productVariant}
              title="Available size"
            >
              {productSizesData.map((item) => (
                <ProductSize
                  key={item.id}
                  chosenValue={chosenSize}
                  value={item.size}
                  onChange={() => setChosenSize(item.size)}
                />
              ))}
            </ProductVariants>
            <ProductVariants
              className={styles.productVariant}
              title="Available color"
            >
              {productColorsData.map((item) => (
                <ProductColor
                  key={item.id}
                  chosenValue={chosenColor}
                  colorImage={item.image}
                  colorLabel={item.label}
                  value={item.color}
                  onChange={() => setChosenColor(item.color)}
                />
              ))}
            </ProductVariants>
          </div>
          <div className={styles.productStock}>
            <p className={styles.productLastMessage}>
              <span className={styles.bold}>Last 1 left</span> - make it yours!
            </p>
            <div className={styles.productCart}>
              <div className={styles.count}>
                <button className={styles.countButton} type="button">
                  <BiMinus className={styles.countIcon} />
                </button>
                <input className={styles.countInput} type="text" />
                <button className={styles.countButton} type="button">
                  <BiPlus className={styles.countIcon} />
                </button>
              </div>
              <button className={styles.productButton} type="button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
