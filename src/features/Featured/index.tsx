import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ProductCard, Section } from 'shared/ui';

import useSlider from './lib/useSlider';
import featuredData from './data';

import styles from './styles.module.scss';

function Featured() {
  const [containerRef, offsetX, handleSlide, arrowsState] = useSlider();

  return (
    <Section
      title="Featured products"
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
      <div className={styles.featured}>
        <div
          className={styles.featuredSlider}
          ref={containerRef}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {featuredData.map((item) => (
            <ProductCard
              className={styles.featuredItem}
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              oldPrice={item.oldPrice}
              price={item.price}
              isSale={item.isSale}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Featured;
