import classNames from 'classnames';
import { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './ProductImages.module.scss';

interface Props {
  images: string[];
  className?: string;
}

function ProductImages(props: Props) {
  const { images, className = '' } = props;
  const secondarySliderRef = useRef<HTMLDivElement>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleScrollSecondary = (newImageIndex: number) => {
    if (secondarySliderRef.current) {
      const childWidth = (secondarySliderRef.current.firstChild as HTMLElement)
        .offsetWidth;
      secondarySliderRef.current.scrollLeft = newImageIndex * childWidth;
    }
  };
  const handleSlideMain = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setImageIndex((prev) => {
        const newIndex = prev - 1 <= 0 ? 0 : prev - 1;
        handleScrollSecondary(newIndex);
        return newIndex;
      });
      return;
    }

    setImageIndex((prev) => {
      const newIndex =
        prev + 1 >= images.length - 1 ? images.length - 1 : prev + 1;
      handleScrollSecondary(newIndex);
      return newIndex;
    });
  };

  return (
    <div className={classNames(styles.images, className)}>
      <div className={styles.imagesTop}>
        {images.length > 1 ? (
          <button
            className={classNames(styles.imagesButton, styles.imagesButtonLeft)}
            type="button"
            disabled={imageIndex === 0}
            onClick={() => handleSlideMain('left')}
          >
            <BsChevronLeft className={styles.imagesIcon} />
          </button>
        ) : null}
        <div
          className={styles.imagesSlider}
          style={{ transform: `translate3d(-${imageIndex * 100}%, 0, 0)` }}
        >
          {images.map((image) => (
            <div className={styles.imagesMainWrapper} key={image}>
              <img className={styles.imagesMain} src={image} alt={image} />
            </div>
          ))}
        </div>
        {images.length > 1 ? (
          <button
            className={classNames(
              styles.imagesButton,
              styles.imagesButtonRight
            )}
            type="button"
            disabled={imageIndex === images.length - 1}
            onClick={() => handleSlideMain('right')}
          >
            <BsChevronRight className={styles.imagesIcon} />
          </button>
        ) : null}
      </div>
      <div className={styles.imagesBottom}>
        <div
          className={classNames(
            styles.imagesSlider,
            styles.imagesSliderSecondary
          )}
          ref={secondarySliderRef}
        >
          {images.map((image, index) => (
            <button
              className={classNames(styles.imagesSecondaryWrapper, {
                [styles.imagesSecondaryWrapperActive]: index === imageIndex,
              })}
              key={image}
              type="button"
              onClick={() => setImageIndex(index)}
            >
              <img className={styles.imagesSecondary} src={image} alt={image} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
