import classNames from 'classnames';
import { Filter, ShopProducts, Subscription } from 'features';
import { useState } from 'react';
import { Breadcrumbs, Offer } from 'shared/ui';

import styles from './styles.module.scss';

function ShopPage() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="container">
      <Breadcrumbs className={styles.shopBreadcrumbs} />
      <div className={classNames(styles.shopContent, styles.shopSection)}>
        <Filter isActive={showFilter} onClose={() => setShowFilter(false)} />
        <ShopProducts openFilter={() => setShowFilter(true)} />
      </div>
      <Offer className={styles.shopSection} />
      <Subscription />
    </div>
  );
}

export default ShopPage;
