import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props {
  title: string;
  className?: string;
  headerClassName?: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}

function Section(props: Props) {
  const {
    title,
    headerRight,
    children,
    className = '',
    headerClassName = '',
  } = props;

  return (
    <section className={classNames(styles.section, className)}>
      <div className={classNames(styles.sectionHeader, headerClassName)}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {headerRight}
      </div>
      {children}
    </section>
  );
}

export default Section;
