import classNames from 'classnames';
import { Curated, Experiences, ProductsSlider, Subscription } from 'features';
import { Link } from 'react-router-dom';
import { Hero, Offer, Section } from 'shared/ui';

import { brandsData, featuredProductsData } from './data';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={classNames('container', styles.home)}>
      <Hero className={styles.homeHero} />
      <Section className={styles.homeSection} title="Brands">
        <div className={styles.homeBrands}>
          {brandsData.map((item) => (
            <Link className={styles.brand} to={item.path} key={item.id}>
              <img
                className={styles.brandImage}
                src={item.image}
                alt={item.title}
              />
            </Link>
          ))}
        </div>
      </Section>
      <Experiences className={styles.homeSection} />
      <Curated className={styles.homeSection} />
      <ProductsSlider
        className={styles.homeSection}
        title="Featured products"
        data={featuredProductsData}
        itemsPerSlide={3}
      />
      <div className={classNames(styles.separator, styles.homeSeparator)}>
        <div className={styles.separatorInner} />
      </div>
      <Offer className={styles.homeSection} />
      <Subscription />
    </div>
  );
}

export default Home;
