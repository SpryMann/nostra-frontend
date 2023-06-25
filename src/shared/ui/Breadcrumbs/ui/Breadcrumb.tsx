import classNames from 'classnames';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import styles from './Breadcrumb.module.scss';

interface Props {
  path: string;
  title: string;
  isLast: boolean;
}

function Breadcrumb(props: Props) {
  const { path, title, isLast } = props;

  return (
    <div
      className={classNames(styles.breadcrumb, {
        [styles.breadcrumbLast]: isLast,
      })}
    >
      {isLast ? (
        <span className={styles.breadcrumbTitle}>{title}</span>
      ) : (
        <>
          <Link
            className={classNames(
              styles.breadcrumbTitle,
              styles.breadcrumbTitleLink
            )}
            to={path}
          >
            {title}
          </Link>
          <BiChevronRight className={styles.breadcrumbArrow} />
        </>
      )}
    </div>
  );
}

export default Breadcrumb;
