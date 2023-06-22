import { Curated, Experiences } from 'features';
import { Link } from 'react-router-dom';
import { Hero, Section } from 'shared/ui';

import brandsData from './data';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className="container">
      <Hero className={styles.homeHero} />
      <Section className={styles.homeBrandsWrapper} title="Brands">
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
      <Experiences className={styles.homeExperiences} />
      <Curated />
    </div>
  );
}

export default Home;
