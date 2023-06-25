import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import comparePathsAndTitles from './lib/comparePathsAndTitles';
import { BreadcrumbSegment } from './types';
import { Breadcrumb } from './ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function Breadcrumbs(props: Props) {
  const { className = '' } = props;
  const { pathname } = useLocation();
  let currentBreamcrumb = '';
  const breadcrumbsSegments: BreadcrumbSegment[] = pathname
    .split('/')
    .filter((item, index) => index === 0 || item)
    .map((segment, index) => {
      currentBreamcrumb += index === 1 ? `${segment}` : `/${segment}`;

      return {
        id: index + 1,
        path: currentBreamcrumb,
        title: comparePathsAndTitles(currentBreamcrumb),
      };
    });

  return (
    <div className={classNames(styles.breadcrumbs, className)}>
      {breadcrumbsSegments.map(({ path, title, id }, index) => (
        <Breadcrumb
          key={id}
          path={path}
          title={title}
          isLast={index === breadcrumbsSegments.length - 1}
        />
      ))}
    </div>
  );
}

export default Breadcrumbs;
