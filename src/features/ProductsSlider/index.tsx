import classNames from 'classnames';
import { Product, ProductCard } from 'entities/product';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Section } from 'shared/ui';

import useSlider from './lib/useSlider';

import styles from './styles.module.scss';

interface Props {
  data: Product[];
  itemsPerSlide: 3 | 4;
  title: string;
  className?: string;
}

function ProductsSlider(props: Props) {
  const { data, itemsPerSlide, title, className = '' } = props;
  const [containerRef, offsetX, handleSlide, arrowsState] = useSlider();

  return (
    <Section
      className={className}
      title={title}
      headerRight={
        <div className={styles.buttons}>
          <button
            className={styles.button}
            type="button"
            disabled={!arrowsState.left}
            onClick={() => handleSlide('left')}
          >
            <BsChevronLeft className={styles.buttonIcon} />
          </button>
          <button
            className={styles.button}
            type="button"
            disabled={!arrowsState.right}
            onClick={() => handleSlide('right')}
          >
            <BsChevronRight className={styles.buttonIcon} />
          </button>
        </div>
      }
    >
      <div className={styles.products}>
        <div
          className={styles.productsSlider}
          ref={containerRef}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {data.map((item) => (
            <ProductCard
              className={classNames(styles.productsItem, {
                [styles.productsItemByFour]: itemsPerSlide === 4,
              })}
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProductsSlider;
