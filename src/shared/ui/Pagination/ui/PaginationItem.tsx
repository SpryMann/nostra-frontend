import classNames from 'classnames';

import styles from './PaginationItem.module.scss';

interface Props {
  type: 'text' | 'number' | 'divider';
  disabled: boolean;
  page: string;
  currentPage: string;
  onClick: undefined | (() => void);
}

function PaginationItem(props: Props) {
  const { type, disabled, page, currentPage, onClick } = props;

  return (
    <button
      className={classNames(
        styles.paginationButton,
        {
          [styles.paginationButtonSquared]: type !== 'text',
        },
        { [styles.paginationButtonDivider]: type === 'divider' },
        {
          [styles.paginationButtonActive]: page === currentPage,
        }
      )}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {page}
    </button>
  );
}

export default PaginationItem;
