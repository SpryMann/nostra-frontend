import { Subscription } from 'features';
import { Breadcrumbs, Offer } from 'shared/ui';

import styles from './styles.module.scss';

function ShopPage() {
  return (
    <div className="container">
      <Breadcrumbs className={styles.shopBreadcrumbs} />
      Browse products
      <Offer className={styles.shopSection} />
      <Subscription />
    </div>
  );
}

export default ShopPage;
