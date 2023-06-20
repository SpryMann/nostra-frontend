import { Section } from 'shared/ui';

import experiencesData from './data';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function Experiences(props: Props) {
  const { className = '' } = props;

  return (
    <Section
      className={className}
      headerClassName={styles.experiencesHeader}
      title={`We provide best
customer experiences
`}
      headerRight={
        <div className={styles.experiencesHeaderRight}>
          <p className={styles.experiencesText}>
            We ensure our customers have the best shopping experience
          </p>
        </div>
      }
    >
      <div className={styles.experiencesList}>
        {experiencesData.map((item) => (
          <div className={styles.experience} key={item.id}>
            <div className={styles.experienceIconWrapper}>
              {item.icon(styles.experienceIcon)}
            </div>
            <h3 className={styles.experienceTitle}>{item.title}</h3>
            <p className={styles.experiencesText}>{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experiences;
