import { Filter, Subscription } from 'features';
import { useState } from 'react';
import { Breadcrumbs, Offer } from 'shared/ui';

import styles from './styles.module.scss';

function ShopPage() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="container">
      <Breadcrumbs className={styles.shopBreadcrumbs} />
      <div className={styles.shopSection}>
        <Filter isActive={showFilter} onClose={() => setShowFilter(false)} />
      </div>
      <button type="button" onClick={() => setShowFilter(true)}>
        Open filters
      </button>
      <Offer className={styles.shopSection} />
      <Subscription />
    </div>
  );
}

export default ShopPage;
