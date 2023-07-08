import classNames from 'classnames';
import { useState } from 'react';
import { Pagination, Section, Select, Textarea } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select/types';

import { productDiscussionsData, sortData } from './data';
import { DiscussionThread } from './ui';

import styles from './styles.module.scss';

function ProductDiscussions() {
  const [sort, setSort] = useState({ label: 'Newest', value: 'date' });
  const [page, setPage] = useState(1);

  const handleChangeSort = (newSort: SelectOption) => setSort(newSort);

  return (
    <Section title="Discussion">
      <div className={styles.discussions}>
        <div className={classNames(styles.sort, styles.discussionsSort)}>
          <p className={styles.sortText}>Sort by</p>
          <Select
            className={styles.sortSelect}
            options={sortData}
            value={sort}
            onChange={handleChangeSort}
          />
        </div>
        <div className={styles.widget}>
          {productDiscussionsData.map((item) => (
            <DiscussionThread
              className={styles.discussionsDiscussion}
              key={item.id}
              data={item}
            />
          ))}
        </div>
        <Pagination
          className={styles.discussionsPagination}
          currentPage={page}
          totalPages={10}
          onChange={(value: number) => setPage(value)}
        />
        <div className={styles.widget}>
          <Textarea
            buttonText="Start discussion"
            placeholder="Question/topic"
          />
        </div>
      </div>
    </Section>
  );
}

export default ProductDiscussions;
