import classNames from 'classnames';
import { ProductReview } from 'entities/product';
import { useState } from 'react';
import { Pagination, Section, Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select/types';

import { productReviewsData, sortData } from './data';
import { ReviewForm } from './ui';

import styles from './styles.module.scss';

function ProductReviews() {
  const [sort, setSort] = useState({ label: 'Newest', value: 'date' });
  const [page, setPage] = useState(1);

  const handleChangeSort = (newSort: SelectOption) => setSort(newSort);

  return (
    <Section title="Ratings & Reviews">
      <div className={styles.reviews}>
        <div className={classNames(styles.sort, styles.reviewsSort)}>
          <p className={styles.sortText}>Sort by</p>
          <Select
            className={styles.sortSelect}
            options={sortData}
            value={sort}
            onChange={handleChangeSort}
          />
        </div>
        <div className={styles.reviewsWidget}>
          <div className={styles.reviewsList}>
            {productReviewsData.map((item) => (
              <ProductReview
                className={styles.reviewsReview}
                key={item.id}
                data={item}
              />
            ))}
          </div>
        </div>
        <Pagination
          className={styles.reviewsPagination}
          currentPage={page}
          totalPages={10}
          onChange={(value: number) => setPage(value)}
        />
        <div className={styles.reviewsWidget}>
          <ReviewForm />
        </div>
      </div>
    </Section>
  );
}

export default ProductReviews;
