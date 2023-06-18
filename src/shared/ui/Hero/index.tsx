import classNames from 'classnames';
import { useState } from 'react';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import heroData from './data';

import styles from './styles.module.scss';

function Hero() {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const handleSlideRight = () =>
    setCurrentSliderIndex((prev) =>
      prev === heroData.length - 1 ? 0 : prev + 1
    );
  const handleSlideLeft = () =>
    setCurrentSliderIndex((prev) =>
      prev === 0 ? heroData.length - 1 : prev - 1
    );

  return (
    <div className={styles.hero}>
      <div className={styles.heroControllers}>
        <button
          className={styles.heroController}
          type="button"
          disabled={currentSliderIndex === 0}
          onClick={handleSlideLeft}
        >
          <BsChevronLeft className={styles.heroIcon} />
        </button>
        <button
          className={styles.heroController}
          type="button"
          disabled={currentSliderIndex === heroData.length - 1}
          onClick={handleSlideRight}
        >
          <BsChevronRight className={styles.heroIcon} />
        </button>
      </div>
      <div
        className={styles.heroSlider}
        style={{
          transform: `translate3d(-${currentSliderIndex * 100}%, 0, 0)`,
        }}
      >
        {heroData.map((item, index) => (
          <div
            className={styles.heroItem}
            key={item.id}
            inert={index === currentSliderIndex ? null : ''}
          >
            <div className={styles.heroImageWrapper}>
              <img
                className={styles.heroImage}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{item.title}</h1>
              <Link
                className={classNames(styles.link, styles.heroLink)}
                to="/shop"
              >
                Shop now
                <BsArrowRight className={styles.linkIcon} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {heroData.length > 1 ? (
        <div className={styles.heroDots}>
          {heroData.map((item, index) => (
            <button
              className={classNames(styles.heroDotButton, {
                [styles.heroDotButtonActive]: index === currentSliderIndex,
              })}
              type="button"
              key={item.id}
              onClick={() => setCurrentSliderIndex(index)}
            >
              <div className={styles.heroDotCircle} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Hero;
