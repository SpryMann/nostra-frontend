import classNames from 'classnames';
import { useState } from 'react';
import { Pagination, Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select/types';

import { Filters, ProductsList } from './ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  openFilter: () => void;
}

const sortSelectOptions = [
  {
    label: 'Popularity',
    value: 'popularity',
  },
  {
    label: 'New Arrivals',
    value: 'new_arrivals',
  },
  {
    label: 'Price Low to High',
    value: 'price_asc',
  },
  {
    label: 'Price High to Low',
    value: 'price_desc',
  },
];

function ShopProducts(props: Props) {
  const { className = '', openFilter } = props;
  const [sort, setSort] = useState<SelectOption>({
    label: 'Popularity',
    value: 'popularity',
  });
  const [page, setPage] = useState(1);

  return (
    <div className={classNames(styles.products, className)}>
      <div className={styles.productsHeader}>
        <p className={styles.productsSearchResult}>
          Showing <span className={styles.bold}>9</span> results from total{' '}
          <span className={styles.bold}>37</span> for &quot;
          <span className={styles.bold}>tops</span>&quot;
        </p>
        <div className={styles.productsSortFilter}>
          <div className={styles.sort}>
            <p className={styles.sortText}>Sort by</p>
            <Select
              className={styles.sortSelect}
              options={sortSelectOptions}
              value={sort}
              onChange={(option: SelectOption) => setSort(option)}
            />
          </div>
          <button
            className={styles.productsButton}
            type="button"
            onClick={openFilter}
          >
            Open filter
          </button>
        </div>
      </div>
      <Filters className={styles.productsFilters} />
      <ProductsList className={styles.productsList} />
      <Pagination
        className={styles.productsPagination}
        currentPage={page}
        totalPages={20}
        onChange={(value: number) => setPage(value)}
      />
    </div>
  );
}

export default ShopProducts;
