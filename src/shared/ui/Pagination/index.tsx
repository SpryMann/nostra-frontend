import classNames from 'classnames';

import { calculatePages } from './lib';
import { PaginationItem } from './ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  currentPage: number;
  totalPages: number;
  onChange: (value: number) => void;
}

function Pagination(props: Props) {
  const { className = '', currentPage, totalPages, onChange } = props;
  const pages = calculatePages(totalPages, 3, currentPage);

  return (
    <div className={classNames(styles.pagination, className)}>
      <PaginationItem
        type="text"
        disabled={currentPage === 1}
        page="Previous"
        currentPage={currentPage.toString()}
        onClick={() => onChange(currentPage - 1)}
      />
      <ul className={styles.paginationList}>
        {pages.map((page) => {
          const isDivider = page === '0';

          return (
            <li className={styles.paginationItem} key={page}>
              <PaginationItem
                type={isDivider ? 'divider' : 'number'}
                disabled={isDivider}
                page={isDivider ? '...' : page}
                currentPage={currentPage.toString()}
                onClick={
                  isDivider ? undefined : () => onChange(parseInt(page, 10))
                }
              />
            </li>
          );
        })}
      </ul>
      <PaginationItem
        type="text"
        disabled={currentPage === totalPages}
        page="Next"
        currentPage={currentPage.toString()}
        onClick={() => onChange(currentPage + 1)}
      />
    </div>
  );
}

export default Pagination;
