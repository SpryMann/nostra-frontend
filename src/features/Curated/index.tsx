import { CategoryCard, Section } from 'shared/ui';

import curatedData from './data';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function Curated(props: Props) {
  const { className = '' } = props;

  return (
    <Section className={className} title="Curated picks">
      <div className={styles.curatedWrapper}>
        {curatedData.map((item) => (
          <CategoryCard
            key={item.id}
            image={item.image}
            title={item.title}
            linkText={item.linkText}
            linkPath={item.linkPath}
          />
        ))}
      </div>
    </Section>
  );
}

export default Curated;
